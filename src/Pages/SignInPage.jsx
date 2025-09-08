// import React, { useState } from 'react';
// import dessert from '../assets/images/image-brownie-desktop.jpg'
// import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";

// export default function SignIn() {
// const navigate = useNavigate()
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const [error, setError] = useState("")

// const handleSubmit = (e)=>{
// e.preventDefault()
// if (!email || !password) {
//   setError ("please fill all fields") 
//   return;
// }
// navigate("/")
// }

//   return (
//     <div className='flex'>
//         <div className='lg:w-1/2 p-7 lg:p-16'>
//         <Link to='/' className='font-bold text-3xl hover:text-red-500 hover:underline'>Desserts</Link>
        
//         <form onSubmit={handleSubmit} className="w-md mx-auto my-[8%] shadow-lg py-3 px-4" action="form">
//         <h1 className='font-bold text-xl mb-2'> Welcome Back</h1>
//         <p className='text-xs mb-2'>Please enter your details</p>
        

//         <label htmlFor='email'>Email Address</label>
//         <input onChange={(e)=> setEmail (e.target.value)} className="border rounded-md my-2 w-full px-3 py-1" id='email' type='text'/>

//         <label htmlFor='password'>Password</label>
//         <input onChange={(e)=> setPassword (e.target.value)} className="border rounded-md my-2 w-full px-3 py-1" id='password' type='text'/>
//         <p className='text-red-500 font-bold'>{error}</p>

//         <div className='flex gap-20'>
//             <div className='flex gap-1'>
//             <input id='Remember' type='checkbox'/>
//             <label htmlFor='remember'>Remember for 30 days</label>
//             </div>
//         <p className='text-red-500 underline'>Forgot Password</p>
//         </div>

//         <button className="border w-full my-2 py-2 px-3 rounded-md bg-rose-200 hover:bg-green-800 hover:text-white" type="submit">Sign in</button>

//         <button className="border w-full my-2 p-2 gap-2 rounded-md flex items-center justify-center" type="submit">
//         <span><FcGoogle size={20} /></span>Sign in with google</button>
       
//         <h3 className='flex justify-center gap-3'>Don't have an account? 
//         <span className='underline font-bold'><Link to="/signuppage">Sign up</Link></span></h3>
        
//         </form>
//         </div>
//       <img src={dessert} alt='dessert image' className='w-1/2 h-screen hidden lg:block'/>
//     </div>
//   )
// }


import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import image from '../assets/images/image-brownie-desktop.jpg';
import {toast} from "react-toastify"
import {AuthContext} from "../Context/AuthContext"

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthContext)

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitError('');
    console.log('Sign In Data:', formData);
    setLoading(true)
    try {
      await login(formData.email, formData.password)
      navigate("/")
      toast.success("Login successful")
    } catch (error) {
      setSubmitError(error.message || "Sign in failed")
      toast.error("Sign in failed, try again")
    } finally {
      setLoading(false)
    }
    };

  const renderInput = (label, name, type = 'text') => (
    <div>
      <label htmlFor={name} className="block text-xl font-bold">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleChange}
        className="border border-gray-300 rounded-md h-10 px-3 w-full text-lg"
      />
      {errors[name] && <p className="text-red-600 font-semibold mb-3">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
        <Link to="/" className="mb-6">
          <span className="font-bold text-4xl">Desserts</span>
        </Link>

        {submitError && <p className="text-red-600 font-semibold mb-3">{submitError}</p>}

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md w-full">
          <h1 className="text-4xl font-extrabold">Sign In</h1>
          <p className="text-lg font-bold">
            Welcome back! Don’t have an account?
            <span className="underline">
              <Link to="/signuppage">Sign up</Link>
            </span>
          </p>

          {renderInput('Email Address', 'email', 'email')}
          {renderInput('Password', 'password', 'password')}

          <div className="flex lg:flex-row justify-between items-start lg:items-center gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-md lg:text-lg font-bold">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-lg text-rose-800 underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-rose-300 text-white font-bold text-lg h-12 rounded-md w-full"
          >
           {loading ? "Signing in" : "Sign in"}
          </button>

          <button
            type="button"
            className="border border-gray-500 text-lg rounded-md w-full flex items-center justify-center py-2"
          >
            <FcGoogle size={20} className="mr-2" /> Sign in with Google
          </button>
        </form>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <img src={image} alt="brownie-image" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
