Summary::

React is a single page application building library.
The index.html a single html page is loaded in browser. It is given the id mostly root and it is targeted to create a vitrual dom using the main.jsx script . 
Main jsx :(create-react-app)
```jsx
import React from 'react';  
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
Main jsx: (vite - react)
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
here the ReactDOM is used to create the Root element and then the div in the html file is rendered with the components Like App.jsx 

create-react-app and vite follows the same structure with slight variant only like in naming convention.

strict mode is used for the development purposes. 

// npm run start in create-react app
// npm run dev in vite-react

In create-react-app based app we can name the components js But in vite we need to name the file with the .jsx extension 

And always name components on both with the capital letter at beginning .  
