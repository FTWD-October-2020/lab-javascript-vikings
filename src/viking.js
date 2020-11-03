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
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        console.log(randomSaxon, randomViking);
    }

}

let ww3 = new War()
let Alex = new Viking('alex', 100, 50)
let John = new Viking('John', 100, 50)
let Lawrence = new Viking('Lawrence', 100, 50)
let Saxonite = new Saxon(100, 50)
let Saxonito = new Saxon(75, 50)

ww3.addSaxon(Saxonito, Saxonite)
// ww3.addSaxon(Saxonite)
ww3.addViking(Alex)
ww3.addViking(John)
ww3.addViking(Lawrence)

ww3.vikingAttack()
