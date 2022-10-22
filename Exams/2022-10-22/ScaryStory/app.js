window.addEventListener("load", solve)

// 91 of 100
function solve() {
    const main = document.getElementById("main")
    const fieldsInput = { ...getFields() }
    const ul = document.getElementById("preview-list")
    let item = document.createElement("li")

    const publishBtn = document.getElementById("form-btn")
    const saveBtn = document.createElement("button")
    saveBtn.classList.add("save-btn")
    saveBtn.textContent = "Save Story"
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-btn")
    editBtn.textContent = "Edit Story"
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.textContent = "Delete Story"


    function getElements() {
        return {
            firstName: document.getElementById("first-name"),
            lastName: document.getElementById("last-name"),
            age: document.getElementById("age"),
            storyTitle: document.getElementById("story-title"),
            genre: document.getElementById("genre"),
            options: document.querySelectorAll("#genre option"),
            story: document.getElementById("story")
        }
    }

    function updateFieldsData(data) {
        const options = document.querySelectorAll('#genre option')
        const {
            firstName,
            lastName,
            age,
            storyTitle,
            genre,
            story
        } = { ...data }
        fieldsInput.firstName = firstName.value
        fieldsInput.lastName = lastName.value
        fieldsInput.age = age.value
        fieldsInput.storyTitle = storyTitle.value
        fieldsInput.genre = Array.from(options).find(x => x.selected == true).value
        fieldsInput.story = story.value
    }

    function getFields() {
        const {
            firstName,
            lastName,
            age,
            storyTitle,
            // genre,
            options,
            story
        } = { ...getElements() }

        return {
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
            storyTitle: storyTitle.value,
            genre: Array.from(options).find(x => x.selected == true).value,
            story: story.value
        }
    }

    function createItem(data) {
        let li = document.createElement("li")
        li.classList.add("story-info")

        const article = document.createElement("article")

        const name = document.createElement("h4")
        name.textContent = `Name: ${data.firstName.value} ${data.lastName.value}`
        const age = document.createElement("p")
        age.textContent = `Age: ${data.age.value}`
        const title = document.createElement("p")
        title.textContent = `Title: ${data.storyTitle.value}`
        const genre = document.createElement("p")
        const selectedOption = Array.from(data.options).find(x => x.selected == true)
        genre.textContent = `Genre: ${selectedOption.value}`
        const story = document.createElement("p")
        story.textContent = `${data.story.value}`

        article.appendChild(name)
        article.appendChild(age)
        article.appendChild(title)
        article.appendChild(genre)
        article.appendChild(story)

        li.appendChild(article)
        li.appendChild(saveBtn)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)

        return li
    }

    function clear() {
        const options = document.querySelectorAll("#genre option")
        const elements = getElements()
        elements.firstName.value = ""
        elements.lastName.value = ""
        elements.age.value = ""
        elements.storyTitle.value = ""
        Array.from(options).forEach(x => x.selected = false)
        elements.story.value = ""
    }

    function publish() {
        const data = getElements()

        if (data.firstName.value === "") {
            console.log("empty fields", firstName.id)
            return
        }

        if (data.lastName.value === "") {
            console.log("empty fields", lastName.id)
            return
        }

        if (data.age.value === "") {
            console.log("empty fields", age.id)
            return
        }

        if (data.storyTitle.value === "") {
            console.log("empty fields", storyTitle.id)
            return
        }

        updateFieldsData(data)
        item = createItem(data)
        ul.appendChild(item)


        publishBtn.disabled = true
        publishBtn.classList.add("disabled")

        clear()
    }

    function saveData() {
        main.innerHTML = "<h1>Your scary story is saved!</h1>"
    }

    function loadData() {
        publishBtn.disabled = false
        publishBtn.classList.remove("disabled")
        saveBtn.disabled = true
        saveBtn.classList.add("disabled")
        editBtn.disabled = true
        editBtn.classList.add("disabled")
        deleteBtn.disabled = true
        deleteBtn.classList.add("disabled")

        const {
            firstName,
            lastName,
            age,
            storyTitle,
            options,
            story
        } = { ...getElements() }

        firstName.value = fieldsInput.firstName
        lastName.value = fieldsInput.lastName
        age.value = fieldsInput.age
        storyTitle.value = fieldsInput.storyTitle
        Array.from(options).forEach(x => {
            x.selected = x.value == fieldsInput.genre ? true : false
        })
        story.value = fieldsInput.story

        ul.removeChild(item)
    }
    function deleteData() {
        ul.removeChild(item)

        publishBtn.classList.remove("disabled")
        publishBtn.disabled = false
    }


    publishBtn.addEventListener("click", publish)
    saveBtn.addEventListener("click", saveData)
    editBtn.addEventListener("click", loadData)
    deleteBtn.addEventListener("click", deleteData)
}