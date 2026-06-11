// React Forms - Multiple Input Fields

// Handling Multiple Inputs

// When you have multiple controlled input fields in a form, you can manage their state either by:

// 1. Using a separate useState call for each input.

// 2. Using a single useState call with an object to hold all form field values.

// We will use the second approach, as it is more common for forms.

// Make sure each input field has a unique name attribute.

// Also, when initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.

// Example
// Use the useState Hook to manage the input:

import { useState } from "react";
import { createRoot } from "react-dom/client";

function myForm(){
    const [inputs,setInputs]= useState({});

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }

    return(
        <form >
            <label>FirstName: 
                <input type="text" 
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                 />
            </label>
            <label>LastName: 
                <input type="text" 
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                 />
            </label>
              <p>Current values: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}
// Example Explained:
// The first thing to notice is that when using a single useState call, we use an object to hold any initial values. In this case, with no initial values, we use an empty object:

// const [inputs, setInputs] = useState({});
// Next, the handleChange function is updated to handle multiple input fields.

// In the function, we access the input fields in the event handler using the e.target.name and e.target.value syntax.

// To update the state, use square brackets [bracket notation] around the property name.

// function handleChange(e) {
//   const name = e.target.name;
//   const value = e.target.value;
//   setInputs(values => ({...values, [name]: value}))
// }
// When refering to input values, we add the name of the state object, inputs, as well as the name of the input field:

// <input 
//   type="text" 
//   name="firstname" 
//   value={inputs.firstname} 
//   onChange={handleChange}
// />
// <input 
//   type="text" 
//   name="lastname" 
//   value={inputs.lastname} 
//   onChange={handleChange}
// />
// <p>Current values: {inputs.firstname} {inputs.lastname}</p>


// Initial Values
// To add initial values to the input fields in the example above, add the proper keys and values to the useState object:

// Example:
// Use initial values for firstname and lastname:

  const [inputs, setInputs] = useState({
    firstname: 'John',
    lastname: 'Doe'
  });