// React Forms - Checkbox
// Checkbox
// For checkboxes, use the checked attribute instead of value to control its state.

// We'll use the useState Hook to manage the value of the textarea:

// In the handleChange function, use the e.target.type property check if the current input is a checkbox or not.

// Example:
// React uses the checked attribute to control the checkbox:
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);



{/* 
// Initial Values
// To add initial values to the input fields in the example above, add the proper keys and values to the useState object:

// Example:


// Use initial values for the input fields: */}



  const [inputs, setInputs] = useState({
    firstname: 'John',
    tomato: true,
    onion: false
  });