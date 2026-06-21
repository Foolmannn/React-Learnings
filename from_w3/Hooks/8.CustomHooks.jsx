// React Custom Hooks
// You can make your own Hooks!

// When you have components that can be used by multiple components, we can extract that component into a custom Hook.

// Custom Hooks start with "use". Example: useFetch.

// Build a Hook
// First, let us make an example without a custom Hook.

// In the following code, we are fetching data from a URL and displaying it.

// We will use the JSONPlaceholder service to fetch some fake data.

// To learn more about fetching data, check out the JavaScript Fetch API section.

// Example:
// Use the JSONPlaceholder service to fetch some fake titles and display them:

import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <Home />
);

// The logic behind the fetch may be needed in other components as well, so we will turn that into a custom Hook.

// Move the fetch logic to a new file to be used as a custom Hook.

// The file name must start with use, and end with .js, and be placed in the same directory as the component.

// We will name the file useFetch.js.

// Example:
// Move the fetch component into the new file:

// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

// Now we can import this Hook, and use it in any other component:

// Example:
// Import and use the newly created custom Hook:

// main.jsx

import { createRoot } from 'react-dom/client';
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <Home />
);

// Example Explained
// We have created a new file called useFetch.js containing a function called useFetch which contains all of the logic needed to fetch our data.

// We removed the hard-coded URL and replaced it with a url variable that can be passed to the custom Hook.

// Lastly, we are returning our data from our Hook.

// In main.jsx, we are importing our useFetch Hook and utilizing it like any other Hook. This is where we pass in the URL to fetch data from.

// Now we can reuse this custom Hook in any component to fetch data from any URL.