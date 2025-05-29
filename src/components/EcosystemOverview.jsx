import React from 'react';
import image from '../assets/E1.jpg';

const EcosystemOverview = () => {
  const ecosystemItems = [
    
    { number: 1, title: "Central Unit", desc: "BusyAge" },
    { number: 2, title: "Strategic Backbone", desc: "TBBIM Model" },
    { number: 3, title: "Execution Units", desc: "Troups" },
    { number: 4, title: "Managing Interfaces", desc: "PCs (Platform Coordinators)" },
    { number: 5, title: "Domain Partners", desc: "AOBs (Associate Bodies)" },
    { number: 6, title: "Entrepreneurial Network", desc: "OESIL" },
    { number: 7, title: "Knowledge Core", desc: "ZSoul Ventures" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-blue-400 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xl opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            What is the BusyAge Ecosystem?
          </h1>
          <p className="text-lg mb-6 text-white/90">
            A structured collective of business troupes, operational frameworks, partner bodies,
            strategic thinkers, platform coordinators, and investor arms — all aligned to build businesses that last.
          </p>
          <a href="#" className="text-white font-semibold underline hover:text-blue-200">
            Explore our progress →
          </a>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl backdrop-blur-lg bg-white/10">
          <img
            src={image}
            alt="Ecosystem Visual"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center text-green-900 font-bold text-2xl">
            Let's build together...
          </div>
        </div>
      </div>

      {/* Trending-Like Ecosystem Items (Wraps to Next Line) */}
     {/* Ecosystem Items Full-Width, No Right Gap */}
<div className="bg-gray-100 border-b border-gray-300 px-4 py-6">
  <div className="flex flex-wrap gap-4 w-full">
    
    {/* Parent Header Box */}
    <div className="flex items-center justify-center border-l-4 border-blue-700 bg-transparent p-6 min-w-[250px] max-w-xs">

      <div className="text-green-900 font-bold text-xl text-center">
        Types of Items
      </div>
    </div>

    {/* Child Ecosystem Items */}
    {ecosystemItems.map(({ number, title, desc }) => (
      <div
        key={number}
        className="flex items-start border-l-4 border-blue-500 bg-white shadow-sm p-4 rounded-lg min-w-[250px] max-w-xs"
      >
        <div>
          <div className="text-blue-600 font-bold text-lg mb-1">{number}</div>
          <div className="text-gray-900 font-semibold">{title}</div>
          <div className="text-gray-600 text-sm">{desc}</div>
        </div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default EcosystemOverview;
