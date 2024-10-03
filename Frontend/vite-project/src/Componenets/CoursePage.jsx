import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const CoursePage = () => {

  const handleDownload = (fileName) => {
    // Create a temporary anchor element for downloading
    const link = document.createElement('a');
    link.href = `/path/to/your/course-materials/${fileName}`;
    link.download = fileName;

    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger a click on the link
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);

    // Show the alert message
    alert('Course material download started.');
  };

  return (
    <>
      <Navbar></Navbar>
      <br />
      <br />
      <div className="flex flex-col items-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8 custom:my-10 custom2:my-10 md:my-10">
        <div className="w-full max-w-6xl space-y-8 py-8 xxs:py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Course Material Page
          </h1>
          <p className="text-lg text-white text-center mb-8">
            Students can download their course materials from the sections below.
          </p>
          
          {/* BCA Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center mb-4">BCA</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 1</h3>
                <button
                  onClick={() => handleDownload('bca_year1.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 1 Course Material
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 2</h3>
                <button
                  onClick={() => handleDownload('bca_year2.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 2 Course Material
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 3</h3>
                <button
                  onClick={() => handleDownload('bca_year3.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 3 Course Material
                </button>
              </div>
            </div>
          </div>

          {/* BBM Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center mb-4">BBM</h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 1</h3>
                <button
                  onClick={() => handleDownload('bbm_year1.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 1 Course Material
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 2</h3>
                <button
                  onClick={() => handleDownload('bbm_year2.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 2 Course Material
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl text-white">Year 3</h3>
                <button
                  onClick={() => handleDownload('bbm_year3.pdf')}
                  className="mt-2 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download Year 3 Course Material
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
