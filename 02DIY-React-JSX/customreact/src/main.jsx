import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'



const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google </a>
)

createRoot(document.getElementById('root')).render(
   // App() //we can do like this as at the end the App is the function being returned as jsx.
anotherElement
)
