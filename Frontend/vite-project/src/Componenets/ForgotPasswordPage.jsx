import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to the phone number
    console.log('Sending OTP to:', phoneNumber);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP
    console.log('Verifying OTP:', otp);
    // After verification, enable the password fields
  };

  const handleUpdatePassword = () => {
    // Logic to update the password
    console.log('Updating password to:', newPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-4">Forgot Password</h1>
        {!otpSent ? (
          <div>
            {!isEditing ? (
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  id="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none bg-gray-200"
                  placeholder="Enter your phone number"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                >
                  Send OTP
                </button>
               <Link to={"/login"}> <button
                  type="button"
                                    className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
                >
                 Back
                </button></Link>     
                
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">Enter OTP</label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none bg-gray-200"
              placeholder="Enter the OTP"
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
            >
              Verify OTP
            </button>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mt-4">New Password</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none bg-gray-200"
              placeholder="Enter your new password"
            />
            <button
              type="button"
              onClick={handleUpdatePassword}
              className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none"
            >
              Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
