// React JSX EXPRESSIONS

// One of the most powerful features of JSX is the ability to embed JavaScript expressions directly within your markup.

// Expressions
// You can insert any valid JavaScript expression inside JSX by wrapping it in curly braces { }.

// React will evaluate the expression and render the result in the DOM.

// ExampleGet your own React.js Server
// Execute the expression 218 * 1.36:

function Hello(){
    return (
<>
        <h1>Product is : </h1>
        <p>{218 * 1.36}</p>
</>
    )
}

// Variables
// Variables are also valid expressions. Insert variables in JSX by wrapping it in curly braces { }.

// Example
// Use a variable inside JSX:
function Car() {
  const hp = 218 * 1.36;
  return (
    <>
      <h1>My car</h1>
      <p>It has {hp} horsepower</p>
    </>
  );
}

// Function Calls
// Function calls are valid expressions. Insert function calls in JSX by wrapping it in curly braces { }.

// Example
// Use a function inside JSX:

function kwtohp(kw) {
  return kw * 1.36;
}

function Car() {
  return (
    <>
      <h1>My car</h1>
      <p>It has {kwtohp(218)} horsepower</p>
    </>
  );
}

// Object Properties
// Access object properties within JSX:


// Example
// Refer to an object property inside JSX:

function Car() {
  const myobj = {
    name: "Fiat",
    model: "500",
    color: "white"
  };
  return (
    <>
      <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
}