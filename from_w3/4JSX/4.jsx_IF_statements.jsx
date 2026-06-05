// React JSX If Statements
// Conditions - if statements
// React supports if statements, but not inside JSX.

// To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

// Option 1:
// Write if statements outside of the JSX code:


// Write "Banana" if x is less than 10, otherwise "Apple":
function Fruit(){
    const x = 10;
    let y = "Apple"
    if(x>10){
        y = "Banana"
    }

    return (
        <h1>{y}</h1>
    )
}

// Option 2:
// Use ternary expressions instead:

// Write "Banana" if x is less than 10, otherwise "Apple":

function Fruit(){
    const x = 9;
    return (
        <h1>{(x)>10? "Banana": "Apple"}</h1>
    )
}

// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.