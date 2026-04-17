

function App() {


  const username = "Suman" //variable to be injected in html using jsx 
  return (
<>
Hello from app 
<p>{username} Welcomes you ! </p>
{/* <p>{if(true) username="hello"} Welcomes you ! </p> */} 
{/* We can only add evaluated expressions in jsx ie every computation or comparison cannot be done in the jsx  */}
</>
  )
}

export default App
