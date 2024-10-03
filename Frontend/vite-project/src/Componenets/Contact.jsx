import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from './NavBar';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    course: '',
    center: '',
    name: '',
    fatherName: '',
    email: '',
    percentage: '',
    board: '',
    address: '',
    phone:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    alert('Admission Inquiry Submitted Successfully!');
  };

  return (
    <>
   <Navbar></Navbar>
   <div className="flex flex-col min-h-screen xxs:py-10">
      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className=" text-black max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patna East Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ARCADE BUSINESS COLLEGE</h2>
            <h3 className="text-lg font-medium mb-2">Patna East:</h3>
            <p className="mb-2">
              Arya Kumar Road<br />
              Rajendra Nagar<br />
              Patna 800 016 (Bihar)<br />
              Tel. (0612) 2666000, 2663335<br />
              Cell. 7520 800 800, 91996 62200
            </p>
            <p className="mb-2">
              <strong>Email id:</strong> abcollege.patna@gmail.com
            </p>
          </section>

          {/* Patna West Section */}
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">ARCADE BUSINESS COLLEGE</h2>
            <h3 className="text-lg font-medium mb-2">Patna West:</h3>
            <p className="mb-2">
              Khagaul Road<br />
              (Opp. St. Karen’s School)<br />
              Near Saguna More<br />
              Patna 801 503 (Bihar)<br />
              Cell. 94316 29500, 94730 44410
            </p>
            <p className="mb-2 xxs:text-sm">
              <strong>Email id:</strong> abcollege.sagunamore@gmail.com
            </p>
          </section>
        </div>

        {/* Google Map Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Find Us On The Map</h2>
          <div className="relative w-full h-64">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10454.25809105081!2d85.1518852!3d25.6141782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3c3ae98dbb0d3%3A0x19a0629f89d2a6d2!2sArya%20Kumar%20Road%2C%20Rajendra%20Nagar%2C%20Patna%2C%20Bihar%20800016!5e0!3m2!1sen!2sin!4v1614537157154!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Admission Inquiry Form Section */}
        <section className="mt-8 text-black ">
          <h2 className="text-2xl font-semibold mb-4 text-white">Admission Inquiry</h2>
          <form action='https://api.web3forms.com/submit' method="POST"  className="bg-slate-200 p-6 rounded-lg shadow-lg">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="hidden" name="access_key" value="3993b591-413b-4c56-8758-98132ee41e23"/>
          <div>
            <label htmlFor="course" className="block text-sm font-medium mb-1">Choose Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border-gray-300 bg-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBM">BBM</option>
            </select>
          </div>
          <div>
            <label htmlFor="center" className="block text-sm font-medium mb-1">Choose Center</label>
            <select
              id="center"
              name="center"
              value={formData.center}
              onChange={handleChange}
              className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Center</option>
              <option value="Rajendra Nagar">Rajendra Nagar</option>
              <option value="Saguna More">Saguna More</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium mb-1">Father's Name</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="percentage" className="block text-sm font-medium mb-1">+2 Percentage</label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="board" className="block text-sm font-medium mb-1">Board</label>
            <select
              id="board"
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="BSEB">BSEB</option>
              <option value="ICSE">ICSE</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium mb-1">Complete Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full  bg-white  border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Enter Your Address"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </section>      </main>

      
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default ContactPage;
