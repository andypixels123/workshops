
Object Oriented Programming
Overview

There are many ways to structure code. Different languages and frameworks often favour different styles, both for historical reasons and because of the strengths, weaknesses and design trade-offs of the languages.

In React (and Next.js) code, the majority of the time you’ll be writing in a functional style, “composing” functional components together in different combinations. However, some of the tools you use in the browser are written using an object-oriented style. This is often because there’s a clear hierarchy in the function of the objects. For example, the browser Window object contains a Document object, which contains Element objects, and so on. An element doesn’t make sense outside of the document, which is always inside a browser window.

Some common concepts that you’ll hear in relation to each of these styles include (but aren’t limited to):

    OOP: Classes, inheritance, encapsulation, polymorphism
    FP: Functions, closures, higher-order functions, composition

A full understanding will require some reading, experimentation and practice. In this class, we’ll look at some examples of class based inheritance, which is the basis of Object Oriented Programming.
Class Plan

    Demo: A simple intro to classes and inheritance in JavaScript
    Workshop: Write a simple class and use it in your code

Learning Objectives

    Object-Oriented Programming
    Classes
    Inheritance

Success Criteria

    I can explain the difference between functional programming and object-oriented programming.
    I can give a definition of some basic OOP concepts such as classes, constructors, inheritance, and the this keyword.
    I can write a class constructor to instantiate objects.
    I can create sub-classes that inherit the properties of their parent class.
    “Add your own personal success criterion.”

Required Knowledge

    JavaScript
    TypeScript

Resources

    Object Oriented Programming in JavaScript
    Functional Programming in JavaScript

Workshop
Object Oriented Programming

One of the key concepts in OOP is the idea of a class. A class is a blueprint for creating objects. An object is an instance of a class. You’ll have occasionally used classes without realising it. FormData is a class. Date is a class. Array is a class.

Here’s a simple example of a class in JavaScript:

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

Classes: Inheritance

Inheritance is a key concept in OOP. It allows you to create a new class that is based on an existing class. The new class can inherit the properties and methods of the existing class, it can add new properties and methods, and it can override existing methods.

⛳️ Create a Dog that extends the functionality of the Animal class

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.
dog.poop(); // Rex poops.

💭 You can create the Dog class without defining the constructor function that assigns the name property or the poop function. This is because the Dog class inherits the constructor function and the poop function from the Animal class. All animals share this base functionality.

For a dog, we only have to implement or override the specific differences for a dog.

⛳️ Create a Bird that extends the functionality of the Animal class

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

This can be a powerful way to structure your code. It allows you to create a base class that contains common functionality, and then create subclasses (or children) that inherit that functionality and add their own unique functionality. This forms a hierarchy. In a game you may have a base Weapon class, and then subclasses for Sword, Axe, Bow, etc.

It can sometimes be restrictive. For example, a class can only inherit from one other class. This is known as single inheritance. Some languages, such as C++, support multiple inheritance, but it can be complex and difficult to manage.

What would we do if we wanted to create a pig, and the pig had the ability to fly? We can’t inherit from both Animal and Bird, and it wouldn’t make sense to inherit from Bird because a Pig isn’t a Bird. We have to implement a fly function in the Pig class, and we can’t reuse the fly function from the Bird class. Adding capabilities to different objects can be done with composition, which is a key concept in functional programming.

⛳️ Create a FlyingAnimal class that inherits from Animal and adds the fly function

class FlyingAnimal extends Animal {
  fly() {
    console.log(`${this.name} flies.`);
  }
}

⛳️ Create a Pig class that inherits from FlyingAnimal

class Pig extends FlyingAnimal {
  speak() {
    console.log(`${this.name} oinks.`);
  }
}

const pig = new Pig("Porky");
pig.speak(); // Porky oinks.
pig.poop(); // Porky poops. (inherited from Animal)
pig.fly(); // Porky flies. (inherted from FlyingAnimal)

🎯 Implement a hierarchical class system for building a weapon or magic system in a video game. For example, you might need a Weapon class and associated functions, and then create a Sword and Staff with different attack messages. Think about whether you’d need a MeleeWeapon and MagicalWeapon for the hierarchy to create different types of weapon. Perhaps all Weapons inherit from a GameItem class that provides all the functionality of every object in the game. For a magic system you may have a Spell class, and then DefensiveSpells and DamageSpells.
