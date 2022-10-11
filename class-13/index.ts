// Classes

// Template for Objects 
// User class

class User{
  name: string = "";
  age: number = 0; 
  occupation: string = '';

  // A method is a function defined in a class
  eat(){
    console.log("I am eating.")
  }

  logMyName(){
    // logging the user's name
    console.log("My name is " + this.name)
  }

  logMyDetails(){
    // Log my name to the console.
    this.logMyName();    
    // Log my age to the console
    console.log("My age is " + this.age)
    // Log my occupation to the console
    console.log("My occupation is " + this.occupation)
  }
}

class Animal{
  legCount:number = 0;
  species: string = '';
  breed:string = '';

  // Method
  drink(){
    console.log("I am drinking")
  }
}

let animal = new Animal();
animal.breed = 'Snake';
animal.species = 'Copper Head'
animal.legCount = 0;
console.log(animal)
animal.drink();

// Creating a user instance/object
let user:User = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor"

console.log(user)
// Execute the eat method
user.eat();

user.logMyName();


let zach:User = new User();
zach.age = 16;
zach.name = "Zach";
zach.occupation = "student";
zach.logMyDetails();

