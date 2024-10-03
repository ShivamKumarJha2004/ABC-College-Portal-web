import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
    <Navbar></Navbar>
   
   <br />
   <br />
   <br />
   <br /> 
   <div className="container mx-auto px-4 py-8 bg-gray-600 text-white custom:text-center custom:p-3 custom:w-[50rem] custom3:text-center">
      <h1 className="text-4xl font-semibold text-center mb-6 text-lime-400 ">Welcome to Arcade Business College
      </h1>
      <div className="text-lg leading-relaxed">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">About</h2>
          <p>
          Rated as best institution of Bihar for BCA, BBM : Started in 1998, Arcade Business College is the premier institute to offer professional education or courses to the students of Bihar. The college is run and managed by Arcade Educational Trust, a purely ‘no-profit, no-loss’ charitable trust, registered u/s Indian Trusts Act 1861. The college was initially affiliated to Magadh University Bodhgaya in 1998 and transferred to Patliputra University, Patna in 2018 onwards for UG programs in computer science and management (BCA & BBM). Many ratings have announced Arcade Business College as Bihar’s No. 1 college for BCA & BBM programmes. With it’s 2 campuses in Patna (in Rajendra Nagar and Saguna More), the college has produced many successful managers and software experts.

          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Our History</h2>
          <p>
            Founded in 1998, Arcade Business College has been a leader in business education for nearly three decades. Our college was established with the goal of bridging the gap between academic theory and practical application. Over the years, we have evolved to meet the changing needs of the business world while maintaining our core values of excellence and integrity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-teal-200">Why Arcade ?</h2>
          <p>
          In addition to the core courses, students at Arcade Business College  benefit from add-on courses that enhance their skills and readiness for campus placements. These additional courses ensure that our students are fully prepared to excel in their chosen careers and stand out in the job market. Our college building boasts world-class infrastructure with state-of-the-art facilities. The classrooms are designed for optimal learning experiences, featuring full air-conditioning, spacious layouts, Over Head Projectors, sound systems, microphones, podiums, and ergonomic chairs. We believe in providing an environment that fosters creativity, collaboration, and academic excellence.

          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-300">Our Facilities</h2>
          <p>
            Arcade Business College offers state-of-the-art facilities to support student learning and development. Our campus features modern classrooms, dedicated computer labs, a well-stocked library, and comfortable study areas. We also provide access to online resources and virtual learning tools to enhance the educational experience.
          </p>
        </section>
        
      </div>
      <br />
      <section>
          <h2 className="text-2xl font-semibold mb-4 text-pink-400">Our Location </h2>
          <p>
          Arcade Business College  is strategically located at Rajendra Nagar , Patna, serving as the head office for all branches under the Abc College of Eduaction, Neura, Patna Bihar. Our commitment to quality education, innovative programs, and holistic development sets us apart, making Arcade Business College an ideal place for aspiring professionals to shape their future.

          </p>
        </section>
        <br />
        <section className=' bg-gray-900'>
          
          
          <h2 className="text-4xl font-semibold text-white animate-rgb text-center style">Our Administration

</h2>
<hr />
<br />
<div className='md:flex '>
    <div>    <img src="https://www.abcollege.org/wp-content/uploads/2024/07/Aashish_Aadarsh_sir-300x300-1.webp" alt="" />
    <h4 className='mx-5 text-white text-xl'>Dr.Ashish Adarsh</h4>
    </div>
    <div>
        <p className='text-white container mx-auto px-4 py-8 bg-slate-700 rounded-lg my-5'>Arcade Business College  have received immense support, trust and love from the residents of Bihar, Jharkhand and Northeast UP for the last 15 consecutive years. This is our capital. Arcade Business College  has continuously carried out successful innovative experiments in the field of IT and Management education, which has resulted in better results and better campus placements of our students. Arcade Business College has been ranked as the best college in patna, bihar for the study of BCA, BBM course with an excellent campus placement. We are confident that we will be able to maintain this belief firmly in future also. With best wishes for a bright future.

</p>
    </div>
    

</div>
<div className= 'md:flex'>
    <div className=' text-white container md:w-[55rem] mx-auto px-4 py-8 bg-slate-700 rounded-lg my-5'>
        <p>Nobody ever said that leading an academic institution like Arcade Business College would be an easy task! They also didn’t say that in providing this leadership I would find special rewards that have enriched my life experience immeasurably, yet this is exactly what I have experienced here. Arcade Business College is my dream! We teach the students that they need to be lifelong learners, open to the lessons of every experience, and then we provide them with the opportunities to do just that. The examples of many of our successful students, who graduated or post-graduated from our college, have made our faith even more stronger than before that hard-work, devotion, dedication along with correct guidance; lead us to success. The many formal or informal, direct or indirect ways, in which we teach students at Arcade Business College, contribute a lot in propelling our students rapidly towards their goal. The success of our college leaves us thinking that Arcade Business College has truly become a remarkable teaching and learning community for learners still we have to go miles away and soon we will. As I always say and believe ‘Either you have strong will power or weak excuses.’</p>
    </div>
    <div>   
         <img className='h-[20rem] md:mr-5 ml-2 w-80 rounded-2xl mt-10'  src="https://scontent.fixr3-3.fna.fbcdn.net/v/t39.30808-6/433129822_714897634146965_3754338198385659505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WpT0g-DLB5wQ7kNvgEDELHF&_nc_ht=scontent.fixr3-3.fna&oh=00_AYDneGDQ_zODt_cBqgvg7SEbHE5GiyAxUwZ4rN4lRWHH_A&oe=66AC41A6" alt="" />
        
    <h2 className='text-white text-xl mx-10'>Mr.Vikash Anand</h2>
    </div>
</div>
         
        </section>
    </div>
    <br />
    <div> 
           <Footer></Footer>
    </div>

    </>
  );
};

export default AboutUs;
