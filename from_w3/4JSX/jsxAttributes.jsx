// React JSX Attributes
// JSX allows you to insert attributes into HTML elements, but there are a few important differences.

// class = className
// The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

// JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

// ExampleGet your own React.js Server
// Use attribute className instead of class in JSX:

// Expressions as Attributes
// You can also use JavaScript expressions as attribute values. This is very useful for dynamic attributes.

// Example
// Use JavaScript expressions as attribute values:
// Note that the attribute value is not wrapped in quotes, this is important when using expressions (JavaScript variables) as attribute values. If you use quotes, JSX will treat it as a string literals and not a JavaScript expression.

// camelCase Event Attributes
// Event attributes in JSX are written in camelCase.

// Boolean Attributes
// If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify it as an expression.

// Example
// Boolean true in JSX, this will make the button disabled:

// Example
// Also true in JSX, this will also make the button disabled:

// Example
// False in JSX, this will NOT make the button disabled:

// The style Attribute
// The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, rather than a CSS string (as in HTML).
// Example

// Notice two things about the example above.

// The styles are stored in an object.
// Style properties are written in camelCase, e.g. fontSize, instead of font-size.
// This is an important difference between HTML and JSX.

// You will learn more about CSS and styling in the React CSS Styling chapter.