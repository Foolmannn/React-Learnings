import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  let value=0


  // value will not be updated in UI . It will updated internally but it is not reactive so to update the value in UI we will need to do DOM manipulation traditional way .
  const addValue = ()=>{
    console.log(value,Math.random())
    value=value+1
  }
  const subValue = ()=>{
    console.log(value,Math.random())
    value=value-1
  }
  // So we use the react as it update the variable at multiple places . For this hooks are used 
  const addValue1 = ()=>{
    console.log(value,Math.random())
setCount(count+1)
  }
  const subValue1 = ()=>{
    console.log(value,Math.random())
setCount(count-1)  
}
  return (
    <>

    <h1>Why Use Hooks </h1>
    <div className='traditional'>

    <h2>Counter Value: {value}</h2>
    <div className="buttons">

    <button onClick={addValue}>Add value</button>
    <br></br>
    <button onClick={subValue}>Remove value</button>
    </div>
    <div className='usingHook'>
    <h2>Counter Value: {count}</h2>
    <div className="buttons">

    <button onClick={addValue1}>Add value</button>
    <br></br>
    <button onClick={subValue1}>Remove value</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
