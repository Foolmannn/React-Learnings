// Destructuring in React
// Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables. In React, it's commonly used with props, hooks, and state management.

// Note: Destructuring makes React code cleaner and more readable by reducing repetitive object and array access.

// Destructing Arrays
// Here is the old way of assigning array items to a variable:

const names = ['suman','hari','ram']

// Old way 

const friend = names[0]
const collegue = names[1]
const brother = names[2]

// Now we can use them to access each variable separately

// document.getElementById('demo').innerHTML = collegue

// New way of assigning array items to a variable is :::

// With destructuring 

const vehicles = ['mustang', 'f-150 ', ' raptor']

const [car,truck,suv] = vehicles;

// Now we can access each variable separately

console.log(car,truck)

// WHEN DESTRUCTURING ARRAYS, THE ORDER THAT VARIABLES ARE DECLARED IS IMPORTANT.

// if we only want to get car, suv we can do same but we have to keep the comma and leave the truck 

const [car1,,suv1]= vehicles;

console.log(car1,suv1)

// Destucturing is very handy when a function returns an array 

function dateInfo(dat){
    const d  =dat.getDate()
    const m= dat.getMonth()+ 1
    const y = dat.getFullYear();

    return [d,m,y]
}

const [date,month,year] = dateInfo(new Date());

console.log(date)

// Destructuring Objects
// You can use destructuring to extract the values from an object:

const person = {

    firstName : "suman",
    lastName : "Pun",
    age : 21 

}

// Destructuring 

let {firstName,lastName,age } = person;


// Now as in array one we can access the variable s

console.log(firstName,age)

let {f,l,a } = person;
console.log(f,a)  // this doesnot work will give undefined as for object we have to use the exact keyname while destructuring ::::: 

// For objects, the order of the properties does not matter:

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {lastName, age, firstName} = person;

// We can extract only the value(s) you want:

const fruit = {
    name: "Apple",
    status: "ripe"
}

let {name} = fruit;

console.log(name)

// For potentially missing properties we can set default values: