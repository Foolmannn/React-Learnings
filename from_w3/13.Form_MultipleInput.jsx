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
        setInputs(values=>({...values,[name]:value})) // without this square bracket the state doesnot updates and we will not see any changes 
    }
// Use square brackets inside an object when the property name comes from a variable or expression.

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

  /*



  The `[]` in:
```jsx
setInputs(values => ({
  ...values,
  [name]: value
}))
```

is called **computed property syntax** in JavaScript.

## Why do we need `[name]`?

Suppose your input field is:

```jsx
<input
  type="text"
  name="username"
  onChange={handleChange}
/>
```

When the user types, this line runs:

```jsx
const name = e.target.name; // "username"
const value = e.target.value;
```

Now:

```jsx
[name]: value
```

becomes:

```jsx
username: value
```

So the state updates to:

```jsx
{
  username: "Suman"
}
```

---

## What happens if you don't use `[]`?

If you write:

```jsx
{
  name: value
}
```

JavaScript treats `name` as a literal key called `"name"`.

Example:

```jsx
const name = "username";
const value = "Suman";

const obj = {
  name: value
};

console.log(obj);
```

Output:

```js
{
  name: "Suman"
}
```

Notice the key is `"name"`, not `"username"`.

---

## With `[]`

```jsx
const name = "username";
const value = "Suman";

const obj = {
  [name]: value
};

console.log(obj);
```

Output:

```js
{
  username: "Suman"
}
```

The variable's value is used as the property name.

---

## Why is it useful in forms?

Imagine a form with many fields:

```jsx
<input name="firstName" />
<input name="lastName" />
<input name="email" />
```

Using one handler:

```jsx
const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setInputs(prev => ({
    ...prev,
    [name]: value
  }));
};
```

Typing in:

```jsx
<input name="firstName" />
```

updates:

```js
{
  firstName: "Suman"
}
```

Typing in:

```jsx
<input name="email" />
```

updates:

```js
{
  firstName: "Suman",
  email: "suman@example.com"
}
```

Without `[]`, every update would go into a property literally called `"name"`:

```js
{
  name: "suman@example.com"
}
```

which is not what you want.

---

## General rule

Use square brackets inside an object when the property name comes from a variable or expression.

```js
const key = "age";

const person = {
  [key]: 25
};
```

Equivalent to:

```js
const person = {
  age: 25
};
```

Another example:

```js
const field = "password";

setInputs(prev => ({
  ...prev,
  [field]: "123456"
}));
```

Result:

```js
{
  password: "123456"
}
```

So in your React form, `[name]` is necessary because the field name (`username`, `email`, `password`, etc.) is stored in a variable, and you want that variable's value to become the object key.

*/