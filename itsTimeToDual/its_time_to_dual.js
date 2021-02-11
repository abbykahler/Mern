class Card{
    constructor(name,cost){
        this.name = name;
        this.cost= cost;
    }
}
class Unit extends Card {
        constructor(name, cost, power, resilience) {
            super(name, cost);
            this.power = power;
            this.resilience = resilience;
            
        }
        attack(target) {
            target.resilience -= this.power;
        }
}

class Effect extends Card {
    constructor(name,cost,text, stat, magnitude){
        super(name,cost);
        this.text =text;
        this.stat = stat;
        this.magnitude= magnitude;
    }

    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            target[this.stat] += this.magnitude;
            
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}
// 1
const red_belt_ninja = new Unit("Red Belt Ninja",3,3,4);
const hard_algorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hard_algorithm.play(red_belt_ninja);

// 2
const black_belt_ninja = new Unit("Black Belt Ninja",4,5,4);
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandled_promise_rejection.play(red_belt_ninja);

// 3
const pair_programming = new Effect("Pair Programming", 3,"increase target's power by 2","power",2);
pair_programming.play(red_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);

// class Card{
//     constructor(name,cost){
//         this.name = name;
//         this.cost= cost;
//     }
// }
// class Unit extends Card {
//         constructor(name, cost, power, resilience) {
//             super(name, cost);
//             this.power = power;
//             this.resilience = resilience;
//             console.log("Created " + this.name + " with cost = " + this.cost + ", power = " + this.power + ", and resilience = " + this.resilience);
//         }
//         attack(target) {
//             console.log(target.name + "'s current resilience: " + target.resilience);
//             console.log(target.name + " is hit for " + this.power);
//             target.resilience -= this.power;
//             console.log(target.name + "'s new resilience: " + target.resilience)
//             if (target.resilience <= 0) {
//                 console.log(target.name + " was slain in single combat. RIP!");
//             }

//         }
// }

// class Effect extends Card {
//     constructor(name,cost,text, stat, magnitude){
//         super(name,cost);
//         this.text =text;
//         this.stat = stat;
//         this.magnitude= magnitude;
//         console.log(this.name + " effect card created with cost = " + this.cost + ", text = " + this.text + ", stat = " + this.stat + ", and magnitude = " + this.magnitude);
//     }

//     play( target ) {
//         if( target instanceof Unit ) {
//             // implement card text here
//             console.log(this.name + " is played for a cost of " + this.cost + " and its effect: " + this.text);
//             if (this.stat === "resilience") {
//                 console.log(target.name + "'s resilience is " + target.resilience);
//                 console.log(target.name + " has resilience change by " + this.magnitude);
//                 target.resilience += this.magnitude;
//                 console.log(target.name + "'s new resilience is " + target.resilience);
//             } else if (this.stat === "power") {
//                 console.log(target.name + "'s power is " + target.power);
//                 console.log(target.name + " has power change by " + this.magnitude);
//                 target.power += this.magnitude;
//                 console.log(target.name + "'s new power is " + target.power);
//             } else {
//                 console.log(this.stat + " attack/boost is not yet implemented.");
//             }
//         } else {
//             throw new Error( "Target must be a unit!" );
//         }
//     }

// }

// const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
// const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

// hardAlgorithm.play(redBeltNinja);

// const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);

// const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

// unhandledPromiseRejection.play(redBeltNinja);

// const pairProgramming = new Effect("Pair Programming", 3,"increase target's power by 2","power",2);

// pairProgramming.play(redBeltNinja);

// redBeltNinja.attack(blackBeltNinja);


