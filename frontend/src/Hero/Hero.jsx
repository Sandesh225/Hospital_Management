import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between p-6 items-center">
            <div className="text-3xl font-bold text-gray-900 transition-all duration-500 ease-in-out hover:text-blue-600 ">
              {title}
            </div>
            <div className="">
              <img
                src={imageUrl}
                alt="hero"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
