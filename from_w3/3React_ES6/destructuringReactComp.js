// Destructuring in React Components
// Destructuring is particularly useful in React for working with props, hooks, and API responses. It helps make your code more concise and easier to read.


// Props Destructuring
// When a component receives props, you can use destructuring to extract the values you need.

// Check out the difference between using and not using destructuring:

//Using destructuring:
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}

//NOT using destructuring:
function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
}

// Using destructuring to extract props:

import { createRoot } from 'react-dom/client'

function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
  
createRoot(document.getElementById('root')).render(
  <Greeting name="John" age={25} />
);

// useState Hook Destructuring
// When a component uses the useState hook, we use destructuring to extract the values from it.

// Using destructuring to extract values from useState:

import { createRoot, useState } from 'react-dom/client'

function Counter() {
  // Destructuring the array returned by useState
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);