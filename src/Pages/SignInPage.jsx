import React from 'react';
import dessert from '../assets/images/image-brownie-desktop.jpg'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  return (
    <div className='flex'>
        <div className='lg:w-1/2 p-7 lg:p-16'>
        <Link to='/' className='font-bold text-3xl'>Desserts</Link>

        <form className="w-md mx-auto my-[8%] shadow-lg py-3 px-4" action="form">
        <h1 className='font-bold text-xl mb-2'> Welcome Back</h1>
        <p className='text-xs mb-2'>Please enter your details</p>
        <label htmlFor='email'>Email Address</label>
        <input className="border rounded-md my-2 w-full px-3 py-1" id='email' type='text'/>

        <label htmlFor='password'>Password</label>
        <input className="border rounded-md my-2 w-full px-3 py-1" id='password' type='text'/>

        <div className='flex gap-20'>
            <div className='flex gap-1'>
            <input id='Remember' type='checkbox'/>
            <label htmlFor='remember'>Remember for 30 days</label>
            </div>
        <p className='text-red-500 underline'>Forgot Password</p>
        </div>

        <button className="border w-full my-2 py-2 px-3 rounded-md bg-rose-200 hover:bg-green-800 hover:text-white" type="submit">Sign in</button>

        <button className="border w-full my-2 p-2 gap-2 rounded-md flex items-center justify-center" type="submit">
        <span><FcGoogle size={20} /></span>Sign in with google</button>
       
        <h3 className='flex justify-center gap-3'>Don't have an account? 
        <span className='underline font-bold'><Link to="/signuppage">Sign up</Link></span></h3>
        
        </form>
        </div>
      <img src={dessert} alt='dessert image' className='w-1/2 h-screen hidden lg:block'/>
    </div>
  )
}
