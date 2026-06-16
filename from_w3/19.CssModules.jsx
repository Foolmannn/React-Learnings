// React CSS Modules
// CSS Modules let you write CSS that is scoped locally to a specific component.

// This prevents CSS class name conflicts and makes your styles more maintainable.

// What are CSS Modules?
// In React, CSS Modules are CSS files where class names are scoped locally by default.

// Note: CSS Modules are not a part of the React core library, but are supported by many React build tools.

// The CSS file have to have the .module.css extension and can be used by importing it into your React file(s).

// Creating a CSS Module
// Let's create a CSS module called Button.module.css, where we style some buttons.

// ExampleGet your own React.js Server
// Create a file named Button.module.css, and insert some styles in it:

// Button.module.css

// Using a CSS Module
// Import and use the CSS Module in your component:

// Example
// Create a Button component that uses the CSS Module:

// Example Explained
// We import the styles object from the CSS Module
// We use styles.mybutton to access the mybutton class
// The actual class name of the button will be unique (e.g., _mybutton_q1obu_1)
// REMOVE ADS

// Multiple Classes
// In the example above, we only used one class, but let's add more classes:

// Example
// Add more styles in Button.module.css:

// Button.module.css

// To demostrate the changes, we need to have two buttons, with two classes each:

// Example
// An example with two buttons, with different styling:

// Composing Classes
// CSS Modules allow you to combine classes using the composes keyword:

// Which means that one class can inherit the styles of another class.

// For the previous example, both the primary and the secondary classes are depending on the styles of the mybutton class.

// This can be done by adding composes: mybutton to the primary and secondary classes:

// Example
// Button.module.css

// Now it is enough to use the primary and secondary classes in the component:

// Example

// Global Classes
// When using CSS Modules, the classes in the .module.css file can only be used in the component that imports them. This is done by prefixing the class name with a hash of the file name and a unique identifier. It is safe to use the same class name in different files, as the names will be unique.

// However, sometimes you want your classes to be available globally, and use them in other components.

// You can do this with the :global syntax:

// Example
// Here is a CSS Module with a global class named .myheader:

// BlueHeader.module.css

// The :global wrapper makes the class available for everyone.

// It is simply called .myheader and not prefixed and added a unique identifier like _myheader_q1obu_1

// You can use it in your components like this:

// Example

// Combine Global and Local Classes
// You can combine global and local classes in the same CSS Module:

// Example
// A CSS Module with both global and local classes:

// MyStyles.module.css

// Use it in your components like this: