import React from 'react';
import In111 from '../assets/In111.jpg';

const InvestorRelations = () => {
  return (
    <section className="relative bg-white py-24 px-6 flex items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${In111})`,
          filter: 'blur(8px)',
          transform: 'scale(1.05)', // slightly zoom for blur coverage
        }}
      />

      {/* Overlay to darken or color-tint the background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl text-center">
        <p className="uppercase tracking-widest text-indigo-500 text-sm font-semibold mb-2">
          Investor Relations
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-orange-500">Clarity</span>,{' '}
          <span className="text-blue-500">Confidence</span> &{' '}
          <span className="text-purple-500">Collaboration</span>:
          <br className="hidden md:block" />
          <span className="text-gray-800">
            Investing in Structured Growth
          </span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
          <span className="text-gray-900">BusyAge</span> provides investors with
          <span className="text-indigo-600"> structured opportunities</span> and
          <span className="text-teal-600"> transparent systems</span>, ensuring
          clarity, confidence, and predictable returns through
          <span className="text-pink-600"> strategic alignment</span> and
          <span className="text-yellow-600"> operational excellence</span>.
        </p>

        <button className="border-2 border-blue-300 text-blue-800 hover:bg-orange-500 hover:text-white font-semibold px-6 py-3 rounded transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default InvestorRelations;
