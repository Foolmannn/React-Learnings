import { useState } from 'react'
import Test from './Test'



function App() {
  const [count, setCount] = useState(0)

  return (
<>
<h1>Hello world | Using Vite </h1>

<Test />
</>
  )
}

export default App  // every components name must begin with Capital letters 
