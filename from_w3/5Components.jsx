// React Components
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

// Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

// In older React code bases, you may find Class components primarily used.

// It is now suggested to use Function components along with Hooks, instead of Class components.

// Class components are still supported, check the Class components section for more information.

// Create Your First Component
// When creating a React component, the component's name MUST start with an upper case letter.

// React components returns HTML code.

// Create a Function component called Car

function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

// Rendering a Component
// Now your React application has a component called Car, which returns an <h2> element.

// To use this component in your application, refer to it like this: <Car />

// Example
// Display the Car component in the "root" element:

createRoot(document.getElementById('root')).render(
  <Car />
)

// Props
// Arguments can be passed into a component as props, which stands for properties.

// You send the arguments into the component as HTML attributes.

// You will learn more about props in our React Props chapter.

// Example
// Use an attribute to pass a color to the Car component, and use it in the render function:

function Car(props) {
  return (
    <h2>I am a {props.color} Car!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="red"/>
);

// Components in Components
// We can refer to components inside other components:


function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

// Rendering a Component Twice
// We can render a component multiple times:

// Example
// Use the Car component twice inside the Garage component:

function Car() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
      <Car />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);

// The example above might be a bit useless, but if we change the content of the Car component, by using arguments, it makes more sense:


// Example
// Use the Car component to display two different cars:

function Car(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand="Ford" />
      <Car brand="BMW" />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Garage />
);


// Components in Files
// React is all about re-using code, and it can be a good idea to split your components into separate files.

// To do that, create a new file in the src folder with a .jsx file extension and put the code inside it:

// Note that the filename must start with an uppercase character.

// Example
// This is the new file, we named it Vehicle.jsx:


function Car() {
  return (
    <h2>Hi, I am a Car!</h2>
  );
}

export default Car;

// To be able to use the Car component, you have to import the Vehicle.jsx file in your application.

// Now we import the Vehicle.jsx file in the application, and we can use the Car component as if it was created here.


// main.jsx

import { createRoot } from 'react-dom/client'
import Car from './Vehicle.jsx';

createRoot(document.getElementById('root')).render(
  <Car />
);