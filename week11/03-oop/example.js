// OBJECT ORIENTED PROGRAMMING
// RUN FILE WITH - node example - in terminaL

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    poop() {
        console.log(`${this.name} poops.`);
    }
}

const animal = new Animal("Dog");
animal.speak(); // Dog makes a noise.
animal.poop(); // Dog poops.


// Create a Dog that extends the functionality of the Animal class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
dog.poop(); // Rex poops.


// Create a Bird that extends the functionality of the Animal class
class Bird extends Animal {
    speak() {
        console.log(`${this.name} chirps.`);
    }

    fly() {
        console.log(`${this.name} flies.`);
    }
}

const bird = new Bird("Sparrow");
bird.speak(); // Sparrow chirps.
bird.poop(); // Sparrow poops. (inherited from Animal)
bird.fly(); // Sparrow flies.


// Create a FlyingAnimal class that inherits from Animal and adds the fly function
class FlyingAnimal extends Animal {
    fly() {
        console.log(`${this.name} flies.`);
    }
}


// Create a Pig class that inherits from FlyingAnimal
class Pig extends FlyingAnimal {
    speak() {
        console.log(`${this.name} oinks.`);
    }
}

const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)


// ---------------------------------------------------------
// NEW CLASS EXAMPLE ---------------------------------------
// ---------------------------------------------------------

class gameEquipment {
    constructor(equipName, equipType, equipColour, equipWeight) {
        ((this.name = equipName),
            (this.type = equipType),
            (this.colour = equipColour),
            (this.weight = equipWeight));
    }

    currentEquipment() {
        console.log(
            `You are carrying a ${this.colour} ${this.name} which is a ${this.weight} ${this.type}`
            // undefined is the value of function return
        );
    }
}

// create new objects
const sword1 = new gameEquipment("SuperSabre", "sword", "silver", "3lb");
const shield1 = new gameEquipment("SuperShield", "shield", "red", "2lb");
console.log(sword1);
console.log(sword1.currentEquipment());
console.log(shield1);
console.log(shield1.currentEquipment());

// this is a sub-class --> a class that inherits properties from another class
// extends creates a relationship between purchasedKit and gameEquipment --> purchasedKit has access to the gameEquipment properties and methods
class purchasedKit extends gameEquipment {
    constructor(kitName, kitType, kitColour, kitWeight, kitPrice) {
        // the super operator re-uses the properties declared in the parent class above (gameEquipment)
        super(kitName, kitType, kitColour, kitWeight);
        this.price = kitPrice;
    }
    kitCost() {
        console.log(`${this.name} is a ${this.type} costing ${this.price}`);
        // undefined is the value of function return
    }
}

// create objects
const colt45 = new purchasedKit("Colt 45", "gun", "gold", "2.2lb", "150e");
const blackCatana = new purchasedKit("Catana", "sword", "black", "2.6lb", "2000e");

// show data created
console.log(colt45);
console.log(blackCatana);
console.log(colt45.kitCost());
console.log(colt45.currentEquipment());
console.log(blackCatana.currentEquipment());
console.log(`Item colour is ${colt45.colour}`);
console.log(`Colt 45 price is ${colt45.price}`);
console.log(`Black Catana price is ${blackCatana.price}`);
