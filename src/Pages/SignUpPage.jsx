import React from 'react';
import dessert from '../assets/images/image-brownie-tablet.jpg'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useState} from "react";
import { useNavigate} from "react-router-dom";
// import {registerUser} from "../Utils/api"
import {toast} from "react-toastify"

export default function SignUpPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState ({})
  const [submitError, setSubmitError] = useState ("");
  const [loading, setLoading] = useState (false)

  const handleChange = (e) => {
    setFormData ({...formData, [e.target.name]: e.target.value})
    setErrors ((prevError)=> ({...prevError, [e.target.name]: ""}))
  }

  const validateForm = ()=> {
    const newErrors ={}
    const {name, email, password, confirmPassword} = formData;
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Confirm Password is required";
    else if (password !== confirmPassword) newErrors.confirmPassword= "Passwords do not match";

    setErrors (newErrors);
    return Object.keys(newErrors).length === 0;
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  setSubmitError('');
  setLoading(true)
  try {
    const response = await fetch(`http://localhost:5000/api/user/signup`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(formData),
        });
        const data = await response.json()

        if (response.ok) {
          toast.success("signup successful!! sign in")
          navigate("/signinpage")
        }else{
          setSubmitError(data.message || "signUp failed")
        }
  } catch (error) {
    setSubmitError("something went wrong. Please try again", error)
  } finally{
    setLoading(false)
  }
};

  return (
    <div className='flex'>
        <div className='lg:w-1/2 p-7 lg:p-16'>
        <Link to='/' className='font-bold text-3xl'>Desserts</Link>

        {submitError && (<p className='text-red-600 font-semibold mb-3'>{submitError}</p>)}

        <form onSubmit={handleSubmit} className="space-y-5 shadow-lg max-w-md w-full" action="form">
        <h1 className='font-bold text-xl mb-2'> Sign Up</h1>
        <p className='text-xs mb-2'>Create an account or {" "} <span className='underline font-bold'><Link to="/signinpage">Sign in</Link></span></p>

        <label htmlFor='name' className='block text-xl font-bold'>Full Name</label>
        <input onChange={handleChange} name="name" value={formData.name} className="border border-gray-300 rounded-md my-2 w-full h-10 text-lg px-3 " id='FullName' type='text'/>
        {errors.name && (<p className='text-red-600 font-semibold mb-3'>{errors.name}</p>)}

        <label htmlFor='email' className='block text-xl font-bold'>Email Address</label>
        <input onChange={handleChange} name="email" value={formData.email} className="border border-gray-300 rounded-md my-2 w-full h-10 text-lg px-3 " id='Email' type='text'/>
        {errors.email && (<p className='text-red-600 font-semibold mb-3'>{errors.email}</p>)}

        <label htmlFor='password' className='block text-xl font-bold'>Password</label>
        <input onChange={handleChange} name="password" value={formData.password} className="border border-gray-300 rounded-md my-2 w-full h-10 text-lg px-3 " id='Password' type='password'/>
        {errors.password && (<p className='text-red-600 font-semibold mb-3'>{errors.password}</p>)}

        <label htmlFor='confirm-password' className='block text-xl font-bold'>Confirm Password</label>
        <input onChange={handleChange} name="confirmPassword" value={formData.confirmPassword} className="border border-gray-300 rounded-md my-2 w-full h-10 text-lg px-3 " id='Confirm Password' type='password'/>
        {errors.confirmPassword && (<p className='text-red-600 font-semibold mb-3'>{errors.confirmPassword}</p>)}

        <button className="w-full my-2 py-2 px-3 rounded-md bg-rose-300 font-bold text-lg text-white"> {loading ? "signing up" : "Sign up"} </button>

        <button className="border border-gray-500 text-lg w-full my-2 p-2 gap-2 rounded-md flex items-center justify-center" type="submit">
        <span><FcGoogle size={20} /></span>Sign up with google</button>   
        
        </form>
        </div>
      
          <img src={dessert} alt='dessert image' className='hidden h-auto lg:block lg: w-1/2'/>
        
    </div>
  );
}
