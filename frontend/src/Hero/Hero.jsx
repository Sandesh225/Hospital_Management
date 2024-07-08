import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            ZeeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 relative">
          <img
            src={imageUrl}
            alt="hero"
            className="w-full h-auto rounded-lg shadow-lg animated-image"
          />
          <span className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
            <img src="/Vector.png" alt="vector" className="w-16 h-16" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
