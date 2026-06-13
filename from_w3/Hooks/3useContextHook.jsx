// React useContext Hook

// React Context
// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

// Example:
// Passing "props" through nested components:
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Component1() {
  const [user, setUser] = useState("Suman");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Component1 />
);
// Even though component 2 did not need the state, it had to pass the state along so that it could reach component 3.

// The Solution
// The solution is to create context.

// Create Context
// To create context, you must Import createContext and initialize it:

import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

// Next we'll use the Context Provider to wrap the tree of components that need the state Context.

// Context Provider
// Wrap child components in the Context Provider and supply the state value.
function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

// Now, all components in this tree will have access to the user Context.

// Use the useContext Hook
// In order to use the Context in a child component, we need to access it using the useContext Hook.

// First, include the useContext in the import statement:

import { useState, createContext, useContext } from "react";

// Then you can access the user Context in all components:
function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
// Full Example
// Example:
// Here is the full example using React Context:

import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Component1 />
);