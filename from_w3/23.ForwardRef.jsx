// React forwardRef
// What is forwardRef?
// forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.

// Common uses for forwardRef:

// Focusing input elements
// Triggering animations
// Measuring DOM elements
// Integrating with third-party libraries
// Basic Example
// Here's a simple example of forwarding a ref to an input element:

import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// In this example:

// We wrap our input component with forwardRef
// The component receives a ref as its second parameter
// The parent can now control the input element directly
// Note: Only use forwardRef when you need direct access to a DOM element. For most cases, you can use props and state instead.