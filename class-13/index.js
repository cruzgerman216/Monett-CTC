// Classes
// Template for Objects 
// User class
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.age = 0;
        this.occupation = '';
    }
    // A method is a function defined in a class
    User.prototype.eat = function () {
        console.log("I am eating.");
    };
    User.prototype.logMyName = function () {
        // logging the user's name
        console.log("My name is " + this.name);
    };
    User.prototype.logMyDetails = function () {
        // Log my name to the console.
        console.log("My name is " + this.name);
        // Log my age to the console
        console.log("My age is " + this.age);
        // Log my occupation to the console
        console.log("My occupation is " + this.occupation);
    };
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.legCount = 0;
        this.species = '';
        this.breed = '';
    }
    // Method
    Animal.prototype.drink = function () {
        console.log("I am drinking");
    };
    return Animal;
}());
var animal = new Animal();
animal.breed = 'Snake';
animal.species = 'Copper Head';
animal.legCount = 0;
console.log(animal);
animal.drink();
// Creating a user instance/object
var user = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor";
console.log(user);
// Execute the eat method
user.eat();
user.logMyName();
var zach = new User();
zach.age = 16;
zach.name = "Zach";
zach.occupation = "student";
zach.logMyDetails();
