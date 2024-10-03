import React from 'react';
import Navbar from './NavBar';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import Footer from './Footer';
import "./LoginPage.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
const LoginPage = () => {
  const location=useLocation();
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/";
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) =>{
        const userInfo = {
     
      email: data.email,
    password: data.password
    };

   
       await axios.post("https://abackendd.onrender.com/login", userInfo).then((res)=>{
        console.log(res.data);
        if (res.data ) {
          toast.success("Student Login Successfully");
          navigate(from,{replace:true});  
              }
         localStorage.setItem("signup",JSON.stringify(res.data.user));
  
          }).catch ((err)=>{
        if(err.response)
          {
        console.log("Error", err);
        toast.error("Error: " + err.response.data.message);

          }
      })

      setTimeout(()=>{
      window.location.reload();
    },2000)
 
        
      
  
    }
    
  
  
  return (
    <>
     
      <Navbar />
      <br />
     
      
      <div className="flex flex-col justify-center items-center min-h-screen  px-4 sm:px-6 lg:px-8 md:my-14">
        <div className="w-full max-w-md p-8 space-y-8 bg-gray-500 rounded-lg shadow-lg ">
          <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxin89rKO34hqzhXgy1tqSuide3BaXULP1AA&s" alt="College Logo" className="w-20 h-20 mx-auto rounded" />
            <h2 className="mt-6 text-3xl font-bold text-white">Student Login</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" >
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", { required: true })}

                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <br />
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  {...register("password", { required: true })}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 bg-gray-200 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                 {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-400">Don't have an account?</p>
            <Link to="/signup" className="xm:bg-green font-medium text-white hover:text-indigo-300">
              Register Now
            </Link>
          </div>
        </div>
       
      </div>
      <Footer />
     
    </>
  );
};

export default LoginPage;
