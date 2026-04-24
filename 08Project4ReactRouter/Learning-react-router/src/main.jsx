import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

//Object-based routing

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children:[{
//     path:"",
//     element:<Home/>
//   },{
//     path:"about",
//     element: <About />
//   },
//   {
//     path:"contact",
//     element: <Contact />
//   },
//   {
//     path:"user/:userid",
//     element: <User />
//   },
//   {
//     loader:githubInfoLoader, // this loader optimizes by preloading the apis 
//     path:"github",
//     element: <Github />
//   },
// ]
// }])

// JSX-based routing in React Router.


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} >
      {/* <Route path="suman"/> this is how we nest another ruote inside the route */}
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
