import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-20  bg-gradient-to-b from-blue-200 via-blue-100 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          Ready to Take the Next Step?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-900 mb-12 max-w-2xl mx-auto">
          Whether you're building, scaling, or transforming — our team is ready to partner with you. Let's create impact together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-8 py-4 bg-gradient-to-b from-blue-200 to-blue-950 text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 shadow-md hover:shadow-lg">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white text-blue-800 border border-blue-800 rounded-full font-semibold hover:bg-gradient-to-b from-blue-200 to-black hover:text-white transition duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
