import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice.js";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";

function App() {
  // This if for create-vite-app
  // console.log(process.env.REACT_APP_APPWRITE_URL)
  // For the vite we have to write as :
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
