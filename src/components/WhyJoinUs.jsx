
import { Frown } from 'lucide-react';
import React from 'react';
import data from '../assets/4.jpg';
import data1 from '../assets/5.jpg';
import data2 from '../assets/6.jpg';
const WhyJoinUs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Why Join Us
        </h2>

        {/* 3 Points Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-96">
            {/* Image Half */}
            <div className="h-1/2 w-full">
              <img 
                src={data} 
                alt="Live Systems" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* Content Half */}
            <div className="h-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                Learn from Live Business Systems
              </h3>
              <p className="text-gray-600 text-sm">
                Engage with structured, real-world ventures across multiple domains.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-96">
            <div className="h-1/2 w-full">
              <img 
                src={data1}
                alt="Real Ventures" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                Work on Real Ventures
              </h3>
              <p className="text-gray-600 text-sm">
                Get deeply involved — not just trained — in building and scaling real businesses.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col h-96">
            <div className="h-1/2 w-full">
              <img 
                src={data2} 
                alt="Culture Ownership" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                Grow in a Culture that Values Ownership
              </h3>
              <p className="text-gray-600 text-sm">
                Lead projects, take charge, and grow beyond traditional roles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
