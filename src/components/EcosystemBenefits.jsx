import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const EcosystemBenefits = () => {
  const benefits = [
    "Scalability Without Rebuilding",
    "Multi-Vertical Support in One Structure",
    "Aligned Systems, Not Random Vendors",
    "Investors, Experts & Founders Under One Roof",
    "Execution with Measurable SOPs and Ownership",
  ];

  const testimonials = [
    "Joining the BusyAge ecosystem reduced our execution friction by 60%.",
    "We scaled with coordination, not chaos.",
    "The clarity we got from troup + PC model was game-changing.",
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-20 px-6 overflow-hidden">
      {/* Glassy background effect */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Benefits Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Benefits of the Ecosystem Approach
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-4 bg-white/40 backdrop-blur-sm rounded-xl hover:bg-white/60 transition"
            >
              <FaCheckCircle className="text-green-600 mt-1" />
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white/60 rounded-2xl p-8 text-center shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">What Our Ecosystem Members Say</h3>
          <div className="grid gap-4 md:grid-cols-3 text-gray-700">
            {testimonials.map((quote, index) => (
              <blockquote
                key={index}
                className="italic border-l-4 border-blue-500 pl-4 text-left"
              >
                “{quote}”
              </blockquote>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-x-4">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            See How TBBIM Works
          </a>
          <a
            href="#"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Join the Ecosystem
          </a>
          <a
            href="#"
            className="inline-block bg-gray-800 hover:bg-black text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Request Ecosystem Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemBenefits;
