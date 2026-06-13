// React Portals


// React Portals provide a way to render HTML outside the parent component's DOM hierarchy.

// This is particularly useful for components like modals, tooltips, and dialogs that need to break out of their container's layout.

// What are React Portals?
// A Portal is a React method that is included in the react-dom package.

// It is used to render HTML outside the parent component's DOM hierarchy.

// Normally the returned HTML element is a child of the parent component, and returned like this:
// Example
// Without using the createPortal method:

function myChild() {
  return (
    <div>
      Welcome
    </div>
  );
}

// But by using the createPortal method, the HTML is not a child of the parent component, and is rendered outside the parent component's DOM hierarchy:

// Example
// With the createPortal method:
import { createPortal } from 'react-dom';

function myChild() {
  return createPortal(
    <div>
      Welcome
    </div>,
    document.body
  );
}

// The first argument (children) is any renderable React content, like elements, strings, or fragments.

// The second argument (domNode) is a DOM element where the portal should be inserted instead.

// Creating a Modal with Portal
// React Portals are particularly useful for components like modals, tooltips, and dialogs that need to break out of their container's layout.

// Here is an example of a modal component where the modal is rendered outside the parent component's DOM hierarchy:

// Example

import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function MyApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)


// Example Explained
// First, we import the necessary functions:

// createPortal from react-dom - for creating the portal
// useState from react - for managing the modal's open/close state
// The Modal component uses createPortal to render its content directly into the document.body element.


// Why Use Portals
// Portals are particularly useful for:

// Modals and dialogs
// Tooltips
// Floating menus
// Notifications
// Any UI element that needs to "break out" of its container's layout, especially when the parent component has:

// overflow: hidden
// z-index conflicts
// Complex positioning requirements
// Event Bubbling in Portals
// Even though a portal renders content in a different part of the DOM tree, events from the portal content still bubble up through the React component tree as if the portal wasn't there.

// For example, if a button inside a portal is clicked, the event will still bubble up to the parent component, and the parent component's event handler will be triggered.

// Example
// Click the button to demonstrate that both the button and the parent div element will have its onClick event triggered:
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { createPortal } from 'react-dom';

function PortalButton({ onClick, children }) {
  return createPortal(
    <button 
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white'
      }}>
      {children}
    </button>,
    document.body
  );
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      
      <PortalButton
        onClick={(e) => {
          // This runs first
          setCount2(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// Example Explained
// In this example:

// The PortalButton component is rendered as a floating button fixed to the bottom-right corner of the screen using a portal
// Even though the button exists outside the parent <div> in the DOM, clicking it will:
// First trigger the button's own onClick handler (incrementing the counter)
// Then trigger the parent div's onClick handler
// This demonstrates that event bubbling works through React's component hierarchy, not the DOM hierarchy
