import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    // 1. Extract both status and loading from Redux store
    const { status, loading } = useSelector((state) => state.auth)

    useEffect(() => {
        // 2. CRITICAL: Do absolutely nothing until App.jsx finishes the initial Appwrite check
        if (loading) return;

        // Page requires auth, but user is logged out -> Send to Login
        if (authentication && !status) {
            navigate("/login")
        } 
        // Page forbids auth (Login/Signup), but user is logged in -> Send Home
        else if (!authentication && status) {
            navigate("/")
        }
    }, [status, navigate, authentication, loading])

    // 3. While Redux is checking Appwrite, show a loading message instead of the forms
    return loading ? <h1>Loading application...</h1> : <>{children}</>
}