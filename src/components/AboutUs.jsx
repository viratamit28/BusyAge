import React from 'react';
import image from '../assets/14b.jpg'; // About Us ka image

const AboutUs = () => {
  return (
    <section className=" text-white min-h-screen flex flex-col md:flex-row items-center justify-between p-8 relative overflow-hidden">
      {/* Background blur image */}
      <div className="absolute inset-0 bg-cover bg-center blur-[10px]" style={{ backgroundImage: `url(${image})` }}></div>

      {/* Left side: Image */}
      <div className="mt-10 md:mt-0 md:mr-10 relative z-10">
        <img
          src={image}
          alt="About Us"
          className="w-full max-w-md rounded-lg shadow-[0_15px_30px_rgba(29,78,216,0.5)] transition-all transform hover:scale-105 hover:-rotate-3 duration-500 ease-in-out filter grayscale-50 brightness-95"
        />
      </div>

      {/* Right side: About Us content */}
      <div className="max-w-xl space-y-6 relative z-10 md:ml-10">
        <p className="text-lg text-gray-900 opacity-80">Empowering India’s Future</p>
        <h1 className="text-5xl font-bold leading-tight text-black opacity-90 animate__animated animate__fadeIn">
          Innovating, Transforming <br /> and Leading Together
        </h1>
        <p className="text-base text-blue-950 opacity-90 animate__animated animate__fadeIn animate__delay-1s">
          We drive innovation and sustainable growth by partnering with organizations across industries to create real impact.
        </p>
        
      </div>
    </section>
  );
};

export default AboutUs;
