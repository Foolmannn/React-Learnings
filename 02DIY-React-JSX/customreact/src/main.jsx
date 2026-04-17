import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

//This will not work as it is our custom element and can only be parsed by our own renderer written as customRender function 
/*
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}
*/
const anotherUser = "harish "
// this will work as we are injected the proper html 
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google </a>
)

// this is how the actual element is converted and then injected during the render 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  //  App() //we can do like this as at the end the App is the function being returning the jsx.
// anotherElement 
reactElement
)
