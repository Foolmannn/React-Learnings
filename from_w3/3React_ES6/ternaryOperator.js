// Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>




// Before:
// Here is an example using if / else:

let authenticated=true;

renderApp =()=>{
    console.log("Welcome")

}
renderLogin=()=>{
    console.log("Please Login")

}
if(authenticated){
    renderApp();
}
else{
    renderLogin();
}



// Here is the same example using a ternary operator:

// With Ternary
authenticated = false;
authenticated ? renderApp() : renderLogin()