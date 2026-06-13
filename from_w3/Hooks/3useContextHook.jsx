// React useContext Hook
// React Context
// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

// Example:Get your own React.js Server
// Passing "props" through nested components:

// The Solution
// The solution is to create context.

// Create Context
// To create context, you must Import createContext and initialize it:

// import { useState, createContext, useContext } from 'react';
// import { createRoot } from 'react-dom/client';

// const UserContext = createContext();
// Next we'll use the Context Provider to wrap the tree of components that need the state Context.

// Context Provider
// Wrap child components in the Context Provider and supply the state value.
// Now, all components in this tree will have access to the user Context.

// Use the useContext Hook
// In order to use the Context in a child component, we need to access it using the useContext Hook.

// First, include the useContext in the import statement:

// import { useState, createContext, useContext } from "react";
// Then you can access the user Context in all components:

// Full Example
// Example:
// Here is the full example using React Context: