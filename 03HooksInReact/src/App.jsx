import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0) // count is the state/variable and setCount is the function that update changes the state  
  
  
  //0 is the default value . It could be any datatype(boolean,string,number etc) and even functions but it is avoided due to optimization issues

  let value=0 // any change to this variable will not propaget to the UI without the tidious DOM manipulation 


  // value will not be updated in UI . It will updated internally but it is not reactive so to update the value in UI we will need to do DOM manipulation traditional way .
  const addValue = ()=>{
    console.log(value,Math.random())
    value=value+1
  }
  const subValue = ()=>{
    console.log(value,Math.random())
    value=value-1
  }
  // So we use the react as it update the variable at multiple places . For this hooks are used we are using the useState hook 
  const addValue1 = ()=>{
    console.log(count,Math.random())
setCount(count+1)
  }
  const subValue1 = ()=>{
    console.log(count,Math.random())
    // count=count-1; 
    // setCount(count)  
    //this will not work at the count is constant variable . We can do it by using the let 
    // but the simplest way is directly giveing the new state to the  set function as below 
    setCount(count-1)
}
  return (
    <>

    <h1>Why Use Hooks </h1>
    <div className="main" style={{display:'flex',paddingLeft:'300px',gap:'100px'}}>

    <div className='traditional'>

    <h2>Counter Value: {value}</h2>
    <div className="buttons">

    <button onClick={addValue}>Add value {value}</button>
    <br></br>
    <button onClick={subValue}>Remove value {value}</button>
    </div>
    </div>
    <div className='usingHook'>
    <h2>Counter Value: {count}</h2>
    <div className="buttons">

    <button onClick={addValue1}>Add value {count}</button>
    <br></br>
    <button onClick={subValue1}>Remove value {count} </button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
