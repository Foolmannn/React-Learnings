
// Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.

// Named exports must be destructured using curly braces. Default exports do not.

// Import named exports from the file person.js:

import {name, age ,name1, age1} from "./person.js"

console.log(name,age)
console.log(name1,age1)

// Import a default export from the file message.js:

import message from "./message.js" 
import messageTest from "./message.js"  // default export can be imported with any name doesnot has to be same as you have exported 

console.log(message())
console.log(messageTest())