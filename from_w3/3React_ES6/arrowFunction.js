// Arrow Functions
// Arrow functions allow us to write shorter function syntax:

hello = function(){
    return "Hello hi how are you !"
}
console.log(hello())


// with arrow function 

hello1 = ()=>{
      return "Hello hi how are you !"
}
console.log(hello1())


// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// Arrow Functions Return Value by Default:

hello2 = ()=>"Hello suman !";
console.log(hello2())


// Note: This works only if the function has only one statement.
// If you have parameters, you pass them inside the parentheses:

hello3 = (val1) => "Hello " + val1;
console.log(hello3("Suman"))

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:
hello4 = val1 => "hellow " + val1;

console.log(hello4("Suman"))

/*

What About this?
The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there is no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the this keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.

*/