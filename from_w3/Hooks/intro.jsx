// React Hooks
// Hooks allow functions to have access to state and other React features without using classes.

// They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.

// What is a Hook?
// Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

// Example:
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);

// You must import Hooks from react.

// Here we are using the useState Hook to keep track of the application state.

// State generally refers to application data or properties that need to be tracked.



// Hook Rules
// There are 3 rules for hooks:

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional


// Note: Hooks will not work in React class components.

// Custom Hooks
// If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.


