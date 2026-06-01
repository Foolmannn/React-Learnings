/*
Classes
ES6 introduced classes.

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

*/


class Pet{
    constructor(name){
        this.name = name;
    }
}
// Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

// creating objects using the class

const mycat = new Pet("Tommy");

console.log(mycat)

/*
Note: The constructor function is called automatically when the object is initialized.

Method in Classes
You can add your own methods in a class:
*/

class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return 'My car is of ' + this.brand + ' brand';
    }
}

const mycar = new Car('Toyota')
console.log(mycar.present())

/*
Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:
*/

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ' It is a ' +  this.model
    }
}

const mycar2 = new Model('Ford' , 'Rapter');
let x =mycar2.show()
console.log(x)
/*
The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

To learn more about classes, check out our JavaScript Classes section.

*/