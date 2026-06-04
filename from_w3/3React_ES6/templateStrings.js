// Template Strings
// Template strings allow you to write strings that span multiple lines and include embedded expressions:

// Before:
const name = "John";
const age = 30;
const message0 = "Hello, " + name + "!\n" + 
"You are " + age + " years old.";

console.log(message0)

// Example
// With Template Strings:

const message1 = `hello, " , ${name} !
you are ${age} years old .` ;
console.log(message1)


// Template strings use backticks (`) instead of quotes and can include:

// Multiple lines without \n
// Expressions inside ${}
// Quotes without escaping


// Multi-line Strings:

const html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`;


// Note: The indentation in multi-line strings becomes part of the string.


// Example
// The indentation becomes part of the string:

const x = `
  John:
    Hello, how are you?
  Jane:
    I'm fine, thanks!
`;
console.log(x)

// Expression Interpolation
// You can include any valid JavaScript expression inside ${} in a template string:

// Example
// Insert variables inside template strings:
let firstName = "Suman";
let lastName = "Pun";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text)


// Example
// Insert expressions inside template strings:

let price = 100;
let quantity = 10 ;

console.log(`Total: ${price * quantity}`);


// Example
// Using the map function inside template strings:
const items = ["apple", "banana", "orange"];
const list = `You have ${items.length} items:

${items.map(item => `-${item}`) . join('\n')} `;

console.log(list)

// Example
// Using ternery operator inside template strings:
const isAdmin = true;
const message = `Status: ${isAdmin ? 'Admin' : 'User'}`;

// Tagged Templates
// You can also use template strings with a function (called a tag) to modify the output.

// Note: Tagged templates are an advanced feature. You might not need them in most cases.

// The function takes the text and the expression(s) as arguments.

// Look at the example below:

// Tagged Template:
function highlight(strings, fname) {
  let x = fname.toUpperCase();
  return strings[0] + x + strings[1];
}

let name12 = "John";

let text12 = highlight`Hello ${name12}, how are you?`;

console.log(text12)

// Example Explained
// The function name is highlight, you can name it whatever you want.

// The first argument holds the text between the expressions, as an array.
// The array items are splitted by the expression.
// In this example strings[0] holds "Hello " and strings[1] holds " how are you?".

// The second argument holds the expressions. In this example fname holds "John".

// Inside the function you can use the arguments to create the final string, and return it.

// Note: If the template string contains multiple expressions, the text will still be held in the first argument, but the expressions will either be held in multiple arguments, or as an array in the second argument.

// Example
// Tagged Template with multiple expressions:

function highlight1(strings, fname1, fname2) {
  let x = fname1.toUpperCase();
  let y = fname2.toUpperCase();
  return strings[0] + x + strings[1] + y + strings[2];
}

let name1 = "John";
let name2 = "Jane";

let text1 = highlight1`Hello ${name1} and ${name2}, how are you?`;
console.log(text1)


// Example
// Tagged Template with multiple expressions that are held in an array using the rest parameter:

function highlight3(strings, ...fname) {
  let x = fname[0].toUpperCase();
  let y = fname[1].toUpperCase();
  return strings[0] + x + strings[1] + y + strings[2];
}

let name3 = "John";
let name4 = "Jane";

let text3 = highlight3`Hello ${name3} and ${name4}, how are you?`;

console.log(text3)