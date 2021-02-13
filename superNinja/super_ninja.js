class Ninja {
    constructor(name) {
        this.name = name;
        this.health=100;
        this.speed = 3;
        this.strength =3;
        this.sayName = function() {
            console.log("My name is " + name);
        }
        this.showStats = function() {
            console.log("Name is "+ this.name + ", Health is " + this.health + ", Speed is " + this.speed + ", Strength is " + this.strength) 
        }
        this.drinkSake = function() {
            this.health+=10;
        }

    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();




class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health +=100;
        this.speed +=7;
        this.strength +=7;
        this.wisdom=10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    drinkSake = function(){
        this.health+=10;
    }
    
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
