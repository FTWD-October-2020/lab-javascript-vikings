// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        console.log("AHH")
        return this.strength;
    }
    receiveDamage(damage) {
        console.log("UFF")
        this.health -= damage;
    }
}
console.log("rambo")
let rambo = new Soldier(100, 200)
rambo.receiveDamage(50)

// Viking
class Viking { }

// Saxon
class Saxon { }

// War
class War { }
