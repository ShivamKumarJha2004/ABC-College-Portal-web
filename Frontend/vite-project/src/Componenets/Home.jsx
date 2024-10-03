import React from 'react';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./Home.css";
import Footer from './Footer';
import Navbar from './NavBar';
const images = [
    'https://www.abcollege.org/wp-content/uploads/2024/01/01.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/01/3.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/03/Harshverdhan_Jain-26-08-202313.jpeg',
    'https://www.abcollege.org/wp-content/uploads/2024/03/Manoj-Bajpayee12.jpeg',
    'https://www.abcollege.org/wp-content/uploads/2024/07/13.jpeg',
    'https://www.abcollege.org/wp-content/uploads/2024/04/2-2.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/04/17.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/04/3-4.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/04/5-4.jpg',
    'https://www.abcollege.org/wp-content/uploads/2024/04/7-3.jpg'
  ];
  const facultyMembers = [
    {
      name: 'Dr. Ashish Kumar',
      position: 'Director Of Arcade Business College',
      image: 'https://www.abcollege.org/wp-content/uploads/2024/07/Aashish_Aadarsh_sir-300x300-1.webp',
    },
    {
      name: 'Mrs Anupam Singh',
      position: 'Head of Department Computer Science',
      image: 'https://media.licdn.com/dms/image/C4E03AQF1h-SCYapACg/profile-displayphoto-shrink_800_800/0/1652019449486?e=1727913600&v=beta&t=Oj_MPPRvvWv_9heLVlfBts6uJBGOcoZzH8bh88ggkfE',
    },
    {
      name: 'Mr . Rahul Kumar',
      position: 'Computer Lab Department Computer Science',
      image: 'https://www.abcollege.org/wp-content/uploads/2024/04/16-1.jpg',
    },
    {
      name: 'Mr. Vikash Anand',
      position: 'Centre Head Of Department Rajendra Nagar',
      image: 'https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/433129822_714897634146965_3754338198385659505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WpT0g-DLB5wQ7kNvgEDELHF&_nc_ht=scontent.fixr3-3.fna&oh=00_AYDneGDQ_zODt_cBqgvg7SEbHE5GiyAxUwZ4rN4lRWHH_A&oe=66AC41A6',
    },
  ];
  


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [prevIndex, setPrevIndex] = useState(images.length - 1);

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
          return () => clearInterval(interval);
        }, []);
      
    return (
    <>
    <Navbar></Navbar>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="container mx-auto  flex flex-col lg:flex-row items-center mb-20 xxs:py-28 md:-my-[9rem]">
        <div className="lg:w-1/2 flex flex-col items-start lg:pr-12 animate__animated animate__fadeInLeft  md:w-[35rem] xs:w-[20rem] md:bottom-[10rem]">
          <h1 className="text-4xl font-bold mb-4 heading  text-black">Welcome to Arcade Business College</h1>
          <p className="mb-6 text-lg text-gray-700">
            Access your <span className='text-pin'>course material</span> by logging in or register now to join our college community.
          </p>
          <div>
         <Link to={"/login"}><button className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-700 transition duration-300">
              Login
            </button></Link>
            <Link to={"/signup"}><button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Register Now
            </button></Link>
          </div>
        </div>
        <br />
        <div className="relative w-full h-[30rem] flex justify-center items-center bg-gray-200 overflow-hidden rounded-lg xs:w-[24rem] xs:my-5 xs:h-[25rem]  md:w-[50rem] xxs:top-20 xxs:w-[21rem]">
      <img
        src={images[prevIndex]}
        alt={`Slideshow Image ${prevIndex + 1}`}
        className="absolute w-full h-full object-cover fade-out "
        key={prevIndex}
      />
      <img
        src={images[currentIndex]}
        alt={`Slideshow Image ${currentIndex + 1}`}
        className="absolute w-full h-full object-cover fade-in"
        key={currentIndex}
      />
    </div>
    </div>
 
    </div>
        <div className="container mx-auto p-6 flex flex-col lg:flex-row items-center custom:p-0 custom:mt-5 ">
          <div className="lg:w-3/4 bg-blend-darken p-8 rounded-lg shadow-md animate__animated animate__fadeInUp md:ml-44 bg-gray-200 custom:w-[22rem] xxs:w-[22.5rem] md:w-[50rem] ">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Important Guidelines for Students</h2>
            <p className="text-lg text-gray-800 mb-4">
              Welcome to our Arcade Business College. We are committed to providing an environment that fosters learning, innovation, and personal growth. Here are some important guidelines to help you make the most of your time here:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Attendance and Punctuality:</strong> Regular attendance is mandatory. Arrive on time to all your classes and labs to ensure you do not miss out on important lessons and activities.
              </li>
              <li>
                <strong>Academic Integrity:</strong> Maintain honesty in all academic activities. Plagiarism, cheating, and other forms of academic misconduct are strictly prohibited and will result in disciplinary actions.
              </li>
              <li>
                <strong>Respect and Etiquette:</strong> Treat faculty, staff, and fellow students with respect. Use polite language and follow proper classroom etiquette at all times.
              </li>
              <li>
                <strong>Use of Technology:</strong> Utilize college resources, including computers and internet access, responsibly. Avoid accessing inappropriate content and respect the college’s IT policies.
              </li>
              <li>
                <strong>Health and Safety:</strong> Follow all health and safety protocols. Participate in drills and be aware of emergency procedures. Report any unsafe conditions to the authorities immediately.
              </li>
              <li>
                <strong>Participation and Collaboration:</strong> Engage actively in class discussions, group projects, and extracurricular activities. Collaboration and teamwork are key components of the learning experience.
              </li>
              <li>
                <strong>Feedback and Improvement:</strong> Provide constructive feedback to your instructors and the administration. Your input is valuable in helping us improve the educational experience.
              </li>
            </ul>
            <p className="mt-4 text-lg text-gray-800">
              By adhering to these guidelines, you contribute to a positive and productive learning environment. We wish you a successful and enriching journey at our Arcade Business College.
            </p>
          </div>
        </div>
        <div className="py-12 bg-gray-100 custom:mt-10 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Our College Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <Footer></Footer>   

      </>
  );
};

export default Home;
