// Styling React Using CSS

// There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:

// Inline styling
// CSS stylesheets
// CSS Modules


// INLINE STYLING
// To style an element with the inline style attribute, the value must be a JavaScript object:

// Example:
// Insert an object with the styling information:

const Header=()=>{
    return  (
        <>
        <h1 style={{color:"blue"}}>Hello World ! </h1>
        <p style={{backgroundColor:"aqua", fontFamily:"sans-serif"}}>This world is beautiful , isn't it ?</p>
        </>
    )
}


// NOTE: IN JSX, JAVASCRIPT EXPRESSIONS ARE WRITTEN INSIDE CURLY BRACES, AND SINCE JAVASCRIPT OBJECTS ALSO USE CURLY BRACES, THE STYLING IN THE EXAMPLE ABOVE IS WRITTEN INSIDE TWO SETS OF CURLY BRACES {{}}.

// camelCased Property Names
// Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:



// JAVASCRIPT OBJECT
// You can also create an object with styling information, and refer to it in the style attribute:

// Example:
// Create a style object named myStyle:

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Styling using the object </h1>
    </>
  );
}


// CSS STYLESHEET
// You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

// Example
// Create a new file called "MyStylesheet.css" and insert some CSS code in it:

// mystylesheet.css 
// body {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Sans-Serif;
//   text-align: center;
// }
// Note: You can call the file whatever you like, just remember the correct file extension.

// Import the stylesheet in your application:

// Example
// Use the import statement to import the stylesheet:
// index.js
import { createRoot } from 'react-dom/client';
import './MyStylesheet.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);

// React knows that files imported with the .css extension, should be treated as a CSS Stylesheet.

// Note: The styles will only be available for the component that imported it.



// CSS MODULES
// Another way of adding styles to your application is to use CSS Modules.

// CSS Modules are convenient for components that are placed in separate files.

// The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

// Create the CSS module with the .module.css extension, example: my-style.module.css.

// Example
// Create a new file called "my-style.module.css" and insert some CSS code in it:
// my-style.module.css
.bigred {
  color: Tomato;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}

// Import the stylesheet in your component:

// Example
// Use import styles to import the stylesheet:
index.jsx
import { createRoot } from 'react-dom/client';
import styles from './my-style.module.css'; 
  
const Car = () => {
  return <h1 className={styles.bigred}>Hello Car!</h1>;
}
  
createRoot(document.getElementById('root')).render(
  <Car />
);
