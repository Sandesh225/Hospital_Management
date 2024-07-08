import React from "react";
const Hero = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-10 px-4 md:px-20">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold  text-white mb-2 transition-all duration-600 ease-in-out hover:text-gray-700">
              {title}
            </h1>
          </div>
          <div className="flex-shrink-0">
            <img
              src={imageUrl}
              alt="hero"
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
            />
          </div>
        </div>
        <div className="flex justify-center p-6 md:p-10">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
