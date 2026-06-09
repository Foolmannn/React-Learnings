// React Conditional Rendering
// In React, you can conditionally render components.

// There are several ways to do this.

// if Statement
// We can use the if JavaScript operator to decide which component to render.

// Example 
function MissedGoal(){
    return <h1>Missed!</h1>
}
function MadeGoal() {
  return <h1>Goal!</h1>;
}
// create another component that chooses which component to render based on a condition:
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);

// Logical && Operator
// Another way to conditionally render a React component is by using the && operator.


// In the example below, the heading will only be rendered if the props.brand property is not empty:
// Example:
// The right side of && will only be rendered if the left side is true:

function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="Ford" />
);
// If props.brand evaluates to true, the expression after && will render.

// Try emptying the brand property:
createRoot(document.getElementById('root')).render(
  <Car />
);

// Ternary Operator
// Another way to conditionally render elements is by using a ternary operator.

// condition ? true : false
function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Goal isGoal={false} />
);