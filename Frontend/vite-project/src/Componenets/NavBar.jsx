import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
 import { useAuth } from '../Context/AuthProvider';
import Logout from "./Logout"



function NavBar() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
 
  const navItem=
  (
    <>
     <Link to={"/"}><li className="nav-item hover:text-blue-500 hover:underline transition duration-300 ease-in-out"><a>Home</a></li></Link> 
     <Link to={"/coursematerial"}><li className="nav-item hover:text-blue-500 hover:underline transition duration-300 ease-in-out"><a>Course Material</a></li></Link>
      <Link to={"/contact"}><li className="nav-item hover:text-blue-500 hover:underline transition duration-300 ease-in-out"><a>Conatct</a></li></Link>
     <Link to={"/about"}><li className="nav-item hover:text-blue-500 hover:underline transition duration-300 ease-in-out"><a>About</a></li></Link>
     

     
    </>

  )
  const [scrolling , setscrolling]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
    if(window.scrollY>0)
      setscrolling(true);
    else{
      setscrolling(false);
    }
  }
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll);  
    }
  
  },[])
  
    return (
    <div className={`max-w-screen-2xl w-full h-[5rem] bg-gray-300
    container mx-auto sd:min-w-full md:px-20 p-2 sd:min-h-24 fixed top-0 left-0 right-0 z-50 ${scrolling?"sticky-navbar shadow-md  bg-pink-200 duration-300 transition-all ease-in-out":""}`}>
        <div className="navbar text-black  w-full">
  <div className="navbar-start">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative bottom-[1rem]  ">
       
      <i class="fa-solid fa-bars text-xl custom3:-mx-20 "></i>  
      </div >
      <ul
      
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow  text-black w-">
       <div className='relative text-white '>
       {navItem}
       
       </div >
       
           </ul>
    </div>
    <div className='w-96'>
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxin89rKO34hqzhXgy1tqSuide3BaXULP1AA&s"
            className="h-10"
            alt="arcade Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black xs:text-xl">
            Student Portal
          </span>
        </a>    
        {
      
      authUser?<Logout></Logout>:
    
    <Link to={"/login"}><button className='bg-pink-500 px-3 py-2  rounded-md -my-3 hover:bg-pink-700 relative left-[14rem] bottom-[2rem]   text-white custom2:left-[15rem] md:left-[70rem] 
    xs:left-[12rem] xs:text-sm xxs:left-[13rem]
    '>Login</button></Link>
}
    </div>

  </div>
  <div className="navend">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 -my-10  text-[1.1rem] space-x-6 text-black font-semibold relative right-14 ">
      {navItem}
   
     
      
    </ul>

    
     </div>

     <div className='relative left-5 md:-left-3'>    
      
       </div>
    </div>
  </div>
</div>
    
  )
}

export default NavBar