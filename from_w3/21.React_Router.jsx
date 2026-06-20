// React Router
// What is React Router?
// React Router is a library that provides routing capabilities for React applications.

// Routing means handling navigation between different views.

// React Router is the standard routing library for React applications. It enables you to:

// Create multiple pages in your single-page application
// Handle URL parameters and query strings
// Manage browser history and navigation
// Create nested routes and layouts
// Implement protected routes for authentication
// Without a router, your React application would be limited to a single page with no way to navigate between different views.

// Install React Router
// In the command line, navigate to your project directory and run the following command to install the package:

        // npm install react-router-dom

// Wrap Your App with BrowserRouter
// Your application must be wrapped with the BrowserRouter component to enable routing:


function App() {
  return (
    <BrowserRouter>
      {/* Your app content */}
    </BrowserRouter>
  );
}

// Create Views
// To demonstrate routing, we'll create three pages (or views) in our application: Home, About, and Contact:

// We will create all three views in the same file for simplicity, but you can of course split them into separate files.

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
// Basic Routing
// React Router uses three main components for basic routing:

// Link: Creates navigation links that update the URL
// Routes: A container for all your route definitions
// Route: Defines a mapping between a URL path and a component

// Let's add navigation links and routes for each link:

// Example
// Note that we need to import BrowserRouter, Routes, Route, Link from 'react-router-dom'.

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
// In this example:

// BrowserRouter wraps your app and enables routing functionality
// Link components create navigation links
// Routes and Route define your routing configuration
// Nested Routes
// You can have a Route inside another Route, this is called nested routes.

// Nested routes allow you change parts of the page when you navigate to a new URL, while other parts is not changed or reloaded, almost like having a page within a page.

// Let's use the example above, and add two new components that will be rendered inside the Products component.

// One called CarProducts and one called BikeProducts:

// Example
// Note that we also need to import the Outlet component from 'react-router-dom'.
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/car">Cars</Link> |{" "}
        <Link to="/products/bike">Bikes</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}

function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
// Important notes about the example above:

    // 1.Outlet:
        // The <Outlet /> element in the Products component specifies where to render the child route's content.
    // 2.Routes:
        // The Routes element contains the routes to CarProducts and BikeProducts as child routes of the Products parent route.
    // 3.URL Structure:
        // The URL structure is relative to the parent route's path. For example:
        // When you navigate to '/products/car', the CarProducts component is rendered.
        // When you navigate to '/products/bike', the BikeProducts component is rendered.



// Style Active Links
// There is a special version of the Link component called NavLink that knows whether the link's URL is "active" or not.

// The NavLink is especially useful for:

    // Navigation menus
    // Breadcrumbs
    // Tabs

// A NavLink is considered active if the current URL matches its to prop.

// The NavLink component makes it easier to style active links.

// Take the basic example from above, and add styles for active links using NavLink:

// Example
// Create a new element called navLinkStyles and replace <Link> with <NavLink> in App.
// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation with NavLink for active styling */}
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
// Note that we also need to import the NavLink component from 'react-router-dom'.

// URL Parameters
// URL parameters are variables that you can add to your route paths. They are often used to pass data between components.

// In the path http://localhost:5173/customer/Tobias, the URL parameter is Tobias.

// URL parameters let you create dynamic routes where part of the URL can change. Think of them as variables in your URL.

// React Router provides the useParams hook to access these parameters in your components.

// Here's a simple example with a greeting page that can say hello to different customers:

// Example
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

// In this example:

// :firstname in the route path is the URL parameter
// If you visit /customer/Emil, you'll see "Hello, Emil"
// If you visit /customer/Tobias, you'll see "Hello, Tobias"
// If you visit /customer/Linus, you'll see "Hello, Linus"
// You can use any name in the URL, and the greeting will work!, try this http://localhost:5173/customer/John