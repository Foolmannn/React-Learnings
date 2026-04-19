import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    title:"Welcome to Nepal",
    place:"Chitwan"
  }
  let newArr = [1,2,3]

  return (
<>
<h1 className='text-4xl font-bold'>Tailwind Test </h1>

<Card name="suman" someObj={myObj} />
{/* <Card /> */}
</>
  )
}

export default App
