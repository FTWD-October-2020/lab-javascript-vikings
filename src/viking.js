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
        let resultOfAttack = randomSaxon.receiveDamage(randomViking.attack());
        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }
        return resultOfAttack;
    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        console.log(randomSaxon, randomViking);
        let resultOfAttack = randomViking.receiveDamage(randomSaxon.attack());
        if(randomViking.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return resultOfAttack;
    }

    showStatus () {
        if(this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }

    drawBattlefield () {
        let saxons = '';
        let vikings = '';
        for(let saxon of this.saxonArmy) {
            saxons += `<div width=${saxon.health} height=${saxon.strength} class="saxon">Saxon</div>`
        }
        for(let viking of this.vikingArmy) {
            vikings += `<div width=${viking.health} height=${viking.strength} class="viking">${viking.name}</div>`
        }

        document.querySelector("#saxons").innerHTML = saxons
        document.querySelector("#vikings").innerHTML = vikings
        
    }

}

let ww3 = new War()
let Alex = new Viking('alex', 100, 50)
let John = new Viking('John', 100, 50)
let Lawrence = new Viking('Lawrence', 100, 50)
let Saxonite = new Saxon(100, 50)
let Saxonito = new Saxon(75, 50)
let Saxoniti = new Saxon(75, 50)

ww3.addSaxon(Saxonito)
ww3.addSaxon(Saxonite)
ww3.addViking(Alex)
ww3.addViking(John)
ww3.addViking(Lawrence)

// ww3.vikingAttack()

ww3.drawBattlefield();





