import { useState } from 'react'

import './App.css'

function App() {
  // This if for create-vite-app 
// console.log(process.env.REACT_APP_APPWRITE_URL)
// For the vite we have to write as :
console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
<>
<h1>Test </h1>
</>
  )
}

export default App
