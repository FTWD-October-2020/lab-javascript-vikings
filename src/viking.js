// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        // console.log("AHH")
        return this.strength;
    }
    receiveDamage(damage) {
        // console.log("UFF")
        this.health -= damage;
    }
}
// console.log("rambo")
let rambo = new Soldier(100, 200)
rambo.receiveDamage(50)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}
let thor = new Viking("THOR", 200, 300)
rambo.receiveDamage(thor.attack())
// console.log(thor.battleCry())

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

let unnamedSaxon = new Saxon(50, 1000)
let otherUnnamedSaxon = new Saxon(60, 800)
let yetAnotherUnnamedSaxon = new Saxon(55, 1100)

let saxonArray = [unnamedSaxon, otherUnnamedSaxon, yetAnotherUnnamedSaxon]
let randomUnnamedSaxon = saxonArray[Math.floor(Math.random() * saxonArray.length)]
let coinFlip = Math.random() > .5
if (coinFlip == true) {
    // console.log(thor.receiveDamage(randomUnnamedSaxon.attack()))
} else {
    // console.log(randomUnnamedSaxon.receiveDamage(thor.attack()))
}

// War
class War { }
