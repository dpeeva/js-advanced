function solve(year, month, day) {
    const current = new Date(year, month - 1, day)
    const prevDate = new Date(current - 24 * 60 * 60 * 1000)
    const data = {
        day: prevDate.getDate(),
        month: prevDate.getMonth() + 1,
        year: prevDate.getFullYear()
    }
    console.log(`${data.year}-${data.month}-${data.day}`)
}

solve(2016, 9, 30) // 2016-9-29
solve(2016, 10, 1) // 2016-9-30