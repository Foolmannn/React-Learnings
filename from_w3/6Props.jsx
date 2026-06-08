// React Props
// Props are arguments passed into React components.

import { createRoot } from "react-dom/client";

// Props are passed to components via HTML attributes.

// props stands for properties.

// // // React Props
// // // React Props are like function arguments in JavaScript and attributes in HTML.

// // // // To send props into a component, use the same syntax as HTML attributes:

// Example:
// adding brand attribute to th Car element 
createRoot(document.getElementById('root')).render(
    <Car brand= "Toyota" />
)

// // The component receives the argument as a props object:


// Example 
// using the brand attribute in the Car component 

function Car(props) {
    return (

        <h2> Brand of Car is : {props.brand} ></h2>
    )
}
// // The name of the object is props, but you can call it anything you want.
function Car(myobj) {
  return (
    <h2>I am a {myobj.brand}!</h2>
  );
}


// // Pass Multiple Properties
// // You can send as many properties as you want.

// // Every attribute is sent to the Car component as object properties.
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" />
);

// Now we can use All the properties are received in the Car component inside the props object 
function Car(props) {
  return (
    <h2>I am a {props.color} {props.brand} {props.model}!</h2>
  );
}

// // Different Data Types
// // React props can be of any data type, including variables, numbers, strings, objects, arrays, and more.

// // STRINGS CAN BE SENT INSIDE QUOTES AS IN THE EXAMPLES ABOVE, BUT NUMBERS, VARIABLES, AND OBJECTS NEED TO BE SENT INSIDE CURLY BRACKETS.

// Numbers 
// Numbers has to be sent inside curly brackets to be treated as numbers:

createRoot(document.getElementById('root')).render(
  <Car year={1969} />
);

// Variables 
// Variables has to be sent inside curly brackets:


let x = "Tesla"
createRoot(document.getElementById('root')).render(
  <Car year={x} />
);

// Objects and Arrays 
// Objects and Arrays has to be sent inside curly brackets:

let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);


// // Object Props
// // The component treats objects like objects, and you can use the dot notation to access the properties.

// Example 

function Car(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969
};

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);

// // Array Props
// // Array props can be accessed using the indexes.

// Example 
function Car(props) {
  return (
    <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2>
  );
}

const carInfo = ["Ford", "Mustang"];

createRoot(document.getElementById('root')).render(
  <Car carinfo={carInfo} />
);

// // Pass Props from Component to Component
// // Attributes are also how you pass data from one component to another, as parameters.

// example 
//  Sending the brand attribute from the Garage component to the Car component 

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

// // NOTE: REACT PROPS ARE READ-ONLY! YOU WILL GET AN ERROR IF YOU TRY TO CHANGE THEIR VALUE.