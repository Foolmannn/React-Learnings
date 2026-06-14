// React Suspense
// React Suspense lets you display an alternative HTML while waiting for code or data to load.

// The alternative HTML can be a component, text, or any valid content.

// What is Suspense?
// Suspense is a React feature that lets your components display an alternative HTML while waiting for code or data to load.

// The most common use cases are:

// Data fetching with suspense-enabled frameworks
// Loading components dynamically with React.lazy()
// Using Suspense
// If a component takes time to load, you can use a Suspense component, and it will display the fallback content while the component is loading.

// Example
// The Fruits component takes two seconds to load, so we wrap it in a Suspense component to display a loading message while it is loading.

import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Fruits from './Fruits';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

//Fruits.jsx

function fetchFruitData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Apple', 'Banana', 'Cherry']);
    }, 2000);
  });
}

let fruitResource = {
  data: null,
  read() {
    if (this.data !== null) return this.data;
    throw fetchFruitData().then(result => this.data = result);
  }
};

function MyFruits() {
  const fruits = fruitResource.read();
  return (
    <>
      <h2>My Favorite Fruits</h2>          
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default MyFruits;

// Using Suspense with lazy Loading

// Another common use of the Suspense component is when importing components with lazy loading:

// In the example above we had to fake a delay of two seconds to see the loading message. A task like displaying three fruits from an array would be too fast to see the loading message at all.

// But with lazy loading, we can import a component dynamically, and it will display a loading message while it is loading, even if the task is very fast.

// Lets first create an example WITHOUT using lazy loading, where we do not fake a two seconds delay:

// Example
// This example is too fast to see the loading message:

import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import Cars from './Cars';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// Now let us create an example WITH using lazy loading:

// Example
// Same example as above, but using lazy loading:

import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';

const Cars = lazy(() => import('./Cars'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);

// Example Explained

// lazy() lets you load a component dynamically
// Suspense shows a fallback while the component loads

// Multiple Components
// One Suspense component can wrap multiple lazy components:

// Example
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const Sidebar = lazy(() => import('./Sidebar'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Content />
        </div>
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);


// Header code 

// Sidebar.jsx code

// content.jsx code 
