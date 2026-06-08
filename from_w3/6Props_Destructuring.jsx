// React Destructuring Props
// Destructuring Props
// You can limit the properties a component receives by using destructuring.

//Example:
// we need only the color property . So specifying it only 

function Car({color}){
    return (
        <h2>My car is of color {color}</h2>
    )
}
createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);


// Note: React uses curly brackets to destructure props: {color}.

// You can also destruct the properties you need inside the component.

// This way, the component receives all the properties, but the destructuring makes sure it only uses the ones it needs.

// Example
// The component receives all the properties, but uses destructuring to limit the properties inside the component.

function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);

// Destructuring ...rest
// When you don't know how many properties you will receive, you can use the ...rest operator.

// Meaning: you can specify the properties you need, and the rest will be stored in an object.

// The component specifies the color and the brand, but the rest is stored in an object like this:
// { model: "Mustang", year: 1969 }.
function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" model="Mustang" color="red" year={1969} />
);


// Default Values
// With Destructuring, you can set default values for props.
// If a property has no value, the default value will be used.

// Example
// Set the default color value to "blue":

function Car({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);