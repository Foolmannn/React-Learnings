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

// Create Views
// To demonstrate routing, we'll create three pages (or views) in our application: Home, About, and Contact:

// We will create all three views in the same file for simplicity, but you can of course split them into separate files.

// Basic Routing
// React Router uses three main components for basic routing:

// Link: Creates navigation links that update the URL
// Routes: A container for all your route definitions
// Route: Defines a mapping between a URL path and a component
// Let's add navigation links and routes for each link:

// Example
// Note that we need to import BrowserRouter, Routes, Route, Link from 'react-router-dom'.

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

// Important notes about the example above:

// Outlet:
// The <Outlet /> element in the Products component specifies where to render the child route's content.
// Routes:
// The Routes element contains the routes to CarProducts and BikeProducts as child routes of the Products parent route.
// URL Structure:
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

// Note that we also need to import the NavLink component from 'react-router-dom'.

// URL Parameters
// URL parameters are variables that you can add to your route paths. They are often used to pass data between components.

// In the path http://localhost:5173/customer/Tobias, the URL parameter is Tobias.

// URL parameters let you create dynamic routes where part of the URL can change. Think of them as variables in your URL.

// React Router provides the useParams hook to access these parameters in your components.

// Here's a simple example with a greeting page that can say hello to different customers:

// Example

// In this example:

// :firstname in the route path is the URL parameter
// If you visit /customer/Emil, you'll see "Hello, Emil"
// If you visit /customer/Tobias, you'll see "Hello, Tobias"
// If you visit /customer/Linus, you'll see "Hello, Linus"
// You can use any name in the URL, and the greeting will work!, try this http://localhost:5173/customer/John