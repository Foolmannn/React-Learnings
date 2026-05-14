import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          const cleanUserData = JSON.parse(JSON.stringify(userData));
          dispatch(login(cleanUserData));
        } else {
          dispatch(logout()); 
        }
      })
      .catch(() => {
        dispatch(logout()); 
      })
      .finally(() => {
        setLoading(false); // Keeps the entire layout locked until status is settled
      });
  }, [dispatch]);

  if (loading) {
    return <h1>Loading configurations...</h1>;
  }

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;