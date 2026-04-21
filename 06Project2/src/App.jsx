import { useState } from 'react'

import './index.css'





function App() {
  const [count, setCount] = useState(0)
  const [length, setlength] = useState(8)
  const [wantNumber, setwantNumber] = useState(false)
  const [wantSymbol, setwantSymbol] = useState(false)
  const [password, setpassword]= useState("")

  const passwordGenerator = ()=>{
    
  }

  return (
  <>

   <h1 className="text-3xl text-white flex flex-wrap justify-center font-bold ">Random Password Generator</h1>
    <div className="main bg-amber-50 min-h-2/4  ">


      <div className="texbox flex flex-wrap rounded-b-4xl bg-white justify-center p-0 m-0">
        <div className="placeholder bg-white w-2/3 "></div>
        <div className="copy bg-blue-700 px-5 py-2 ">Copy</div>

      </div>
    </div>






  </>
  )
}

export default App
