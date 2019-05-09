/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when "this" keyword refers to the window Object.
* 2. Implicit Binding is when "this" keyword refers to the object before the dot in that function call.
* 3. New Binding is when "this" kw refers to the Object created by calling the constructor function with "new" kw.
* 4. Explicit Binding is when "this" kw is explicitly defined while using call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

function showThis() {
    console.log(this);
  }
  
showThis();

// Principle 2

const pirateJack = {
    name: "Jack",
    expiriance: 24,
    saySomething() {
        console.log(`Yaar! My name is ${this.name} and I've been a pirate on these seas for ${this.expiriance} years!`)
    }
}

pirateJack.saySomething();

// Principle 3

function Pirate(name, expiriance) {
    this.name = name;
    this.expiriance = expiriance;
    this.saySomething = function () {
        console.log(`Yaar! My name is ${this.name} and I've been a pirate on these seas for ${this.expiriance} years!`)
    }
}

const pirateDrake = new Pirate("Drake", 12);

pirateDrake.saySomething();

// Principle 4

const pirateSays = pirateDrake.saySomething;
pirateSays.call(pirateDrake);