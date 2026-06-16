// React CSS Modules

// CSS Modules let you write CSS that is scoped locally to a specific component.

// This prevents CSS class name conflicts and makes your styles more maintainable.

// WHAT ARE CSS MODULES?
// In React, CSS Modules are CSS files where class names are scoped locally by default.

// Note: CSS Modules are not a part of the React core library, but are supported by many React build tools.

// The CSS file have to have the .module.css extension and can be used by importing it into your React file(s).

// CREATING A CSS MODULE
// create a CSS module called Button.module.css, where we style some buttons.

// Example
// Create a file named Button.module.css, and insert some styles in it:

// Button.module.css
.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

// Using a CSS Module
// Import and use the CSS Module in your component:

// Example
// Create a Button component that uses the CSS Module:
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.mybutton}>
        My Button
      </button>
    </div>
  );
}

// Example Explained
// We import the styles object from the CSS Module
// We use styles.mybutton to access the mybutton class
// The actual class name of the button will be unique (e.g., _mybutton_q1obu_1)


// MULTIPLE CLASSES
// In the example above, we only used one class, but let's add more classes:

// Example
// Add more styles in Button.module.css:

// Button.module.css
.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

// To demostrate the changes, we need to have two buttons, with two classes each:

// Example
// An example with two buttons, with different styling:
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        My Primary Button
      </button>
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>
    </div>
  );
}


// COMPOSING CLASSES
// CSS Modules allow you to combine classes using the composes keyword:

// Which means that one class can inherit the styles of another class.

// For the previous example, both the primary and the secondary classes are depending on the styles of the mybutton class.

// This can be done by adding composes: mybutton to the primary and secondary classes:

// Example
// Button.module.css
.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  composes: mybutton;
  background-color: #007bff;
  color: white;
}

.secondary {
  composes: mybutton;
  background-color: #6c757d;
  color: white;
}

// Now it is enough to use the primary and secondary classes in the component:

// Example
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}


// GLOBAL CLASSES
// When using CSS Modules, the classes in the .module.css file can only be used in the component that imports them. This is done by prefixing the class name with a hash of the file name and a unique identifier. It is safe to use the same class name in different files, as the names will be unique.

// However, sometimes you want your classes to be available globally, and use them in other components.

// You can do this with the :global syntax:

// Example
// Here is a CSS Module with a global class named .myheader:

// BlueHeader.module.css
:global(.myheader) {
  padding: 10px 20px;
  font-size: 50px;
  color: white;
  background-color: dodgerblue;
}

// The :global wrapper makes the class available for everyone.

// It is simply called .myheader and not prefixed and added a unique identifier like _myheader_q1obu_1

// You can use it in your components like this:

// Example
import styles from './BlueHeader.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
    </div>
  );
}

// COMBINE GLOBAL AND LOCAL CLASSES
// You can combine global and local classes in the same CSS Module:

// Example
// A CSS Module with both global and local classes:

:global(.myheader) {
  padding: 10px 20px;
  font-size: 50px;
  color: white;
  background-color: dodgerblue;
}

.myparagraph {
  font-size: 20px;
  color: white;
  background-color: purple;
}

// MyStyles.module.css

// Use it in your components like this:

import styles from './MyStyles.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
      <p className={styles.myparagraph}>
        My Paragraph
      </p>
    </div>
  );
}