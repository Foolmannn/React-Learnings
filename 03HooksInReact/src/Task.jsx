import { useState } from 'react'

function Task() {
  const [count, setCount] = useState(0) 

  const addValue1 = ()=>{
    console.log(count,Math.random())
setCount(count+1)
  }
  const subValue1 = ()=>{
    console.log(count,Math.random())
if(count>0){
    setCount(count-1)

}
else{
    alert("Cannot update below 0")
}
}
  return (
    <>

    <h1>Task Given  </h1>


    <div className='usingHook'>
    <h2>Counter Value: {count}</h2>
    <div className="buttons">

    <button onClick={addValue1}>Add value {count}</button>
    <br></br>
    <button onClick={subValue1}>Remove value {count} </button>
    </div>
    </div>
    </>
  )
}

export default Task
