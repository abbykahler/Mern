class Ninja {
    constructor(name) {
        this.name = name;
        this.health=100;
        const speed = 3;
        const strength =3;
        this.sayName = function() {
            console.log("My name is " + name);
        }
        this.showStats = function() {
            console.log("Name is "+ this.name + ", Health is" + this.health + ", Speed is " + speed + ", Strength is " + strength) 
        }
        this.drinkSake = function() {
            this.health+=10;
        }

    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


