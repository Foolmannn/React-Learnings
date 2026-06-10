// React Forms
// Just like in HTML, React uses forms to allow users to interact with the web page.

// Adding Forms in React
// You add a form with React like any other element:

//Example: 
function MyForm(){
    return(
        <form>
            <label>Enter your name:
            <input type="text" />
             </label>
        </form>
    )
}
createRoot(document.getElementById('root')).render(
  <MyForm />
);
// This will work as normal, the form will submit and the page will refresh.

// But this is generally not what we want to happen in React.

// We want to prevent this default behavior and let React control the form.

// HTML Forms vs. React Forms
// In React, form elements like <input>, <textarea>, and <select> work a bit differently from traditional HTML.

// In standard HTML, form elements maintain their own value based on user input.

// For example, an <input type="text"> field keeps track of its own value in the HTML DOM.

// In React, the value of the form element is kept in the component's state property and updated only with the setState() function.

// In other words; React provides a way to manage form data through component state, leading to what are known as "controlled components."



// Controlled Components
// In a controlled component, form data is handled by the React component.

// The value of the input element is driven by the React state, and any changes to that value are managed through event handlers that update the state.

// When the data is handled by the components, all the data is stored in the component state.

// We can use the useState Hook to keep track of each input value and provide a "single source of truth" for the entire application.


// Example:
// Use the useState Hook to manage the input:
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
// Example Explained:
// 1. Import the useState Hook from React:

// import { useState } from 'react';
// 2. Declare a state variable to hold the input's value and a function to update it:

// const [name, setName] = useState("");
// 3. Create a function to handle the change event:

// function handleChange(e) {
//   setName(e.target.value);
// }
// 4. Set the value of the input field to the state variable and the onChange attribute to handle the change event:

// <input
//   type="text" 
//   value={name}
//   onChange={handleChange}
// />
// 5. Display the current value to show that the value is being updated:

// <p>Current value: {name}</p>




// Initial Values
// To add an initial value to the input field in the example above, add a value to the useState object:
// Example:
// Use initial value for name:


  const [name, setName] = useState("John");



//   REACT SUBMIT FORMS

// Submitting Forms
// You can control the submit action by adding an event handler in the onSubmit attribute for the <form>:

// Example:Get your own React.js Server
// Add a submit button and an event handler in the onSubmit attribute:

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);

// By making these changes to the <textarea> element, React is able to handle it as any other input element.