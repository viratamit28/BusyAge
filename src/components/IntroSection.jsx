// src/components/IntroSection.jsx
import React from 'react';

const IntroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-blue-200 py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          BusyAge is more than a company — it's a structured movement.
        </h2>

        {/* Paragraphs */}
        <p className="text-lg text-black mb-4">
          We don’t just onboard talent. We align minds with missions.
        </p>
        <p className="text-lg text-black mb-4">
          This is where execution begins with clarity, and evolves with purpose.
        </p>
        <p className="text-lg text-black">
          This is where you don’t just find work — you build your journey.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
