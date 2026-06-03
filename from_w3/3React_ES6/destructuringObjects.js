

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
// console.log(f,a)  // this doesnot work will give undefined as for object we have to use the exact keyname while destructuring ::::: 

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
const fruit1 = {
    name1: "Apple",
    status1: "ripe"
}
let {name1,status1,color1="red"} = fruit1;
console.log(name1)
console.log(color1)

// We can also destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

const person1 = {
  firstName1: "John",
  lastName: "Doe",
  age: 50,
  car: {
    brand: 'Ford',
    model: 'Mustang',
  }
};

// Destructuring 

let {firstName1,car:{brand,model}} = person1;

let message = `Name is ${firstName1}, and I drive ${brand} ${model}`

console.log(message)