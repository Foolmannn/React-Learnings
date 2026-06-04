// Modules
// JavaScript modules allow you to break up your code into separate files.

// This makes it easier to maintain the code-base.

// ES Modules rely on the import and export statements.


// EXPORT

// You can export a function or variable from any file.

// Let us create a file named person.js, and fill it with the things we want to export.

// There are two types of exports: Named and Default.

// NAMED EXPORTS

// You can create named exports two ways:

// In-line individually:

export const name="Suman"
export const age = 21


// All at once at the bottom:

const name1 = "hari"
const age1 = 19


export { name1, age1}


// DEFAULT EXPORTS

// Let us create another file, named message.js, and use it for demonstrating default export.

// You can only have one default export in a file.

// Insert the following code into the newly created file:
// Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.

// Named exports must be destructured using curly braces. Default exports do not.
// Import named exports from the file person.js:

// Import a default export from the file message.js: