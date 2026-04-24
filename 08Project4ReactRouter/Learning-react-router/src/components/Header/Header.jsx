import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-3 duration-200 ${
      isActive ? "text-orange-700" : "text-gray-700"
    } hover:text-orange-700`;

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-12"
              alt="Logo"
            />
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 rounded-lg text-sm px-4 py-2 mr-2"
            >
              Get started
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col w-full lg:flex lg:flex-row lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/github" className={navLinkClass} onClick={() => setIsOpen(false)}>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}