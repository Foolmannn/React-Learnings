// Spread Operator
// The JavaScript spread operator (...) copies all or part of an existing array or object into another array or object.

// for ex
const n1 = [1,2,3,4]
const n2 = [5,6,7,8]
const nCombined = [...n1,...n2]
console.log(nCombined)

// The spread operator is often used in combination with destructuring.

// Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1,2,3,4,5,6,7,8]


const [one,two, ...rest] = numbers;

console.log(one)
console.log(two)
console.log(rest)


// We can use the spread operator with objects too:

const obj1 = {
    name:"Suman",
    age:22,
    job:"student"
}
const objMore = {
    name:"Samir",
    age:22,
    job:"Technician"
}

const Objcombined = {...obj1,...objMore}
console.log(Objcombined) // this will give second object only as in final object due to same key obj1 get overwritten So use it with different objects with different key 


const car = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const car_more = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const mycar = {...car, ...car_more}

console.log(mycar)

// Notice that the properties that did not match were added, and the property that did match was overwritten by the last object.