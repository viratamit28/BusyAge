import React from "react";
import So1Image from '../assets/So1.jpg';

const SolutionsByIndustry = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-blue-200 text-gray-900 py-20 px-8 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div>
        <p className="text-sm text-gray-600 uppercase font-medium mb-2">
          Solutions / For Marketing Teams
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Industry-Specific Solutions, Engineered for Success At BusyAge
        </h1>
        <p className="text-lg text-gray-500 mb-8">
         At BusyAge, we provide tailored business ecosystems structured to meet the distinct challenges, opportunities, and growth paths unique to each industry segment.
        </p>
        <button className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Get started free
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        <img
          src={So1Image}
          alt="Team analyzing data"
          className="rounded-lg shadow-md w-full"
        />
        {/* Floating Quote Box */}
        <div className="absolute top-0 right-0 bg-green-100 text-red-800 text-sm p-4 rounded-md shadow-md w-60 -translate-y-1/2 translate-x-1/4">
          <span className="italic">"Wow! Our analytics show a 15% drop-off here."</span>
        </div>
      </div>
    </div>
  );
};

export default SolutionsByIndustry;
