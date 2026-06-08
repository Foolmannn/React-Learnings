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

// // Strings can be sent inside quotes as in the examples above, but numbers, variables, and objects need to be sent inside curly brackets.

// // Object Props
// // The component treats objects like objects, and you can use the dot notation to access the properties.

// // Array Props
// // Array props can be accessed using the indexes.

// // Pass Props from Component to Component
// // Attributes are also how you pass data from one component to another, as parameters.

// // Note: React Props are read-only! You will get an error if you try to change their value.