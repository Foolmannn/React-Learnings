import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button , Logo, Input} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function SignUp() {
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

const create = async (data) => {
    setError("");
    try {
      // 1. Register the user profile database entry
      const newUser = await authService.createAccount(data);
      
      if (newUser) {
        // 2. CRITICAL: Log them in using the form details to start an active session
        const session = await authService.login({
          email: data.email,
          password: data.password
        });

        if (session) {
          // 3. Retrieve the fully validated user profile
          const userData = await authService.getCurrentUser();
          
          if (userData) {
            // 4. Cleanse the object of all hidden Appwrite / json-bigint prototypes
            const cleanUserData = JSON.parse(JSON.stringify(userData));

            dispatch(login({
              id: cleanUserData.$id,
              name: cleanUserData.name,
              email: cleanUserData.email,
            }));
          }
          
          // 5. Safe to navigate home now that Redux and Appwrite are synchronized
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

    return (
      <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default SignUp