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
console.log(thor.battleCry())

// Saxon
class Saxon { }

// War
class War { }
