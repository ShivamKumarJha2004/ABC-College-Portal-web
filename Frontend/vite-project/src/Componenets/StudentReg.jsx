import React from 'react';
import Navbar from './NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
function StudentReg() {
  const location=useLocation();
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/";
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      collegeId: data.collegeId,
      fullname: data.fullname,
      fathername: data.fathername,
      email: data.email,
      course: data.course,
      gender: data.gender,
      phone: data.phone,
      password: data.password
    };

        
       await axios.post("https://abackendd.onrender.com/signup", userInfo).then((res)=>{
        console.log(res.data);
        if (res.data ) {
          toast.success("Student Registered Successfully");
          navigate(from,{replace:true});
        }  
        localStorage.setItem("signup",JSON.stringify(res.data.createdUser
        ));
       
        
      }).catch ((err)=>
        {
          if(err.response)
          {
        console.log("Error", err);
        toast.error("Error: " + err.response.data.message);
   
       
          }
  })
       
    
      
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-900 min-h-screen flex flex-col py-8 custom:my-16">
        <br />
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center bg-gray-500 px-2 md:my-14 custom3:my-20">
          <div className="px-6 py-8 rounded shadow-md w-full">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxin89rKO34hqzhXgy1tqSuide3BaXULP1AA&s" alt="College Logo" className="w-20 h-20 mx-auto -my-2 rounded" />
            <br />
            <h1 className="mb-8 text-3xl text-center text-white font-semibold">Student Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  id="collegeId"
                  {...register("collegeId", { required: true })}
                  type="text"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="collegeId"
                  placeholder="College Id eg-abc01"
                />
                {errors.collegeId && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <input
                  id="fullname"
                  {...register("fullname", { required: true })}
                  type="text"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                />
                {errors.fullname && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <input
                  id="fathername"
                  {...register("fathername", { required: true })}
                  type="text"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="fathername"
                  placeholder="Father's Name"
                />
                {errors.fathername && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <input
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && <span className="text-red-500">Email should be unique</span>}
              </div>

              <div>
                <select id="course" {...register("course", { required: true })} className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4" name="course">
                  <option value="" disabled selected>Select Course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBM">BBM</option>
                  <option value="Other">Other</option>
                </select>
                {errors.course && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <select id="gender" {...register("gender", { required: true })} className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4" name="gender">
                  <option value="" disabled selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
                {errors.gender && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <input
                  id="phone"
                  {...register("phone", { required: true })}
                  type="text"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="phone"
                  placeholder="Phone No"
                />
                {errors.phone && <span className="text-red-500">This field is required</span>}
              </div>

              <div>
                <input
                  id="password"
                  {...register("password", { required: true })}
                  type="password"
                  className="block border bg-white text-black border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-white mt-6 mx-16">
              Already have an account?
              <br />
              <Link to={"/login"}><a className="no-underline border-b border-blue text-blue-700 font-semibold mx-16 custom:text-center custom3:mx-10 ">Log in</a></Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentReg;
