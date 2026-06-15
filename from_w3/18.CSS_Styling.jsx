// Styling React Using CSS
// There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

// Inline styling
// CSS stylesheets
// CSS Modules
// Inline Styling
// To style an element with the inline style attribute, the value must be a JavaScript object:

// Example:
// Insert an object with the styling information:


// Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

// camelCased Property Names
// Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

// Example:
// Use backgroundColor instead of background-color:

// JavaScript Object
// You can also create an object with styling information, and refer to it in the style attribute:

// Example:
// Create a style object named myStyle:

// CSS Stylesheet
// You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

// Example
// Create a new file called "MyStylesheet.css" and insert some CSS code in it:

// Note: You can call the file whatever you like, just remember the correct file extension.

// Import the stylesheet in your application:

// Example
// Use the import statement to import the stylesheet:

// React knows that files imported with the .css extension, should be treated as a CSS Stylesheet.

// Note: The styles will only be available for the component that imported it.

// CSS Modules
// Another way of adding styles to your application is to use CSS Modules.

// CSS Modules are convenient for components that are placed in separate files.

// The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

// Create the CSS module with the .module.css extension, example: my-style.module.css.

// Example
// Create a new file called "my-style.module.css" and insert some CSS code in it:


// Import the stylesheet in your component:

// Example
// Use import styles to import the stylesheet:

// You will learn more about CSS Modules in the next chapter.