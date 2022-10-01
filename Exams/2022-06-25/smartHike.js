class SmartHike {

    constructor(username) {
        this.username = username
        this.goals = new Map()
        this.listOfHikes = []
        this.resources = 100
    }

    addGoal(peak, altitude) {
        if (this.goals.has(peak)) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals.set(peak, altitude)
            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.has(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        } else {
            if (this.resources === 0) {
                throw new Error("You don't have enough resources to start the hike")
            }
            const diff = this.resources - time * 10
            if (diff < 0) {
                return "You don't have enough resources to complete the hike"
            } else {
                this.resources = diff
                this.listOfHikes.push({
                    peak,
                    time,
                    difficultyLevel
                })
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
            }
        }
    }

    rest(time) {
        this.resources = this.resources + time * 10
        if (this.resources >= 100) {
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        } else {
            if (criteria === "all") {
                const result = ["All hiking records:"]
                this.listOfHikes.map(a => {
                    result.push(`${this.username} hiked ${a.peak} for ${a.time} hours`)
                })
                return result.join("\n")
            } else {
                const filtered = this.listOfHikes.filter(a => a.difficultyLevel === criteria).sort((a, b) => a.time - b.time)
                if (filtered.length === 0) {
                    return `${this.username} has not done any ${criteria} hiking yet`
                } else {
                    return `${this.username}'s best ${criteria} hike is ${filtered[0].peak} peak, for ${filtered[0].time} hours`
                }
            }
        }
    }
}

/*
const user = new SmartHike('Vili')
console.log(user.addGoal('Musala', 2925))
console.log(user.addGoal('Rui', 1706))
console.log(user.addGoal('Musala', 2925))

// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui 
// Musala has already been added to your goals
*/

/*
const user = new SmartHike('Vili')
console.log(user.addGoal('Musala', 2925))
console.log(user.addGoal('Rui', 1706))
console.log(user.hike('Musala', 8, 'hard'))
console.log(user.hike('Rui', 3, 'easy'))
console.log(user.hike('Everest', 12, 'hard'))

// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You don't have enough resources to complete the hike 
// Uncaught Error: Everest is not in your current goals
*/

/*
const user = new SmartHike('Vili')
console.log(user.addGoal('Musala', 2925))
console.log(user.hike('Musala', 8, 'hard'))
console.log(user.rest(4))
console.log(user.rest(5))

// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You have rested for 4 hours and gained 40% resources 
// Your resources are fully recharged. Time for hiking!
*/

/*
const user = new SmartHike('Vili')
console.log(user.showRecord('all'))

// Vili has not done any hiking yet
*/

const user = new SmartHike('Vili')
user.addGoal('Musala', 2925)
user.hike('Musala', 8, 'hard')
console.log(user.showRecord('easy'))
user.addGoal('Vihren', 2914)
user.hike('Vihren', 4, 'hard')
console.log(user.showRecord('hard'))
user.addGoal('Rui', 1706)
user.hike('Rui', 3, 'easy')
console.log(user.showRecord('all'))

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours
