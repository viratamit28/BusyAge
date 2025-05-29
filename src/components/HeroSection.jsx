
import React from 'react';
import image from '../assets/3.jpg'; // Import image

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-500 text-white min-h-screen flex flex-col md:flex-row items-center justify-between p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center blur-[10px]" style={{ backgroundImage: `url(${image})` }}></div>
      
      <div className="max-w-xl space-y-6 relative z-10">
        <p className="text-lg text-gray-200 opacity-80">Welcome to</p>
        <h1 className="text-5xl font-bold leading-tight text-white opacity-90 animate__animated animate__fadeIn">
          BusyAge <br /> Consultancy Services
        </h1>
        <p className="text-base text-yellow-50 opacity-90 animate__animated animate__fadeIn animate__delay-1s">
          We’re not just available — we’re aligned. Whether you’re exploring a collaboration, seeking support, or just need to talk through your vision, we’re ready.
          <b>Because at BusyAge, connection is the first step to clarity.</b>
        </p>
        
      </div>

      <div className="mt-10 md:mt-0 md:ml-10 relative z-10">
        {/* Image with hover zoom effect */}
        <img
          src={image}
          alt=""
          className="w-full max-w-md rounded-lg shadow-[0_15px_30px_rgba(29,78,216,0.5)] transition-all transform hover:scale-105 hover:rotate-3 duration-500 ease-in-out filter grayscale-50 brightness-95"
        />
      </div>
    </section>
  );
};

export default HeroSection;
