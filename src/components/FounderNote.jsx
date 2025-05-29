import React from "react";
import founderImg from "../assets/founder.jpg"; // Make sure the path is correct

const FounderNote = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-200 to-blue-200 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div>
          <img
            src={founderImg}
            alt="Founder"
            className="rounded-xl shadow-xl object-cover w-full h-full max-h-[500px]"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            A Note from Our Founder
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            “I’ve seen dreams fail because they were too busy surviving to be structured. At BusyAge,
            we build what lasts — systems that carry your dream, even when you’re tired of carrying it yourself.”
          </p>
          <p className="italic text-blue-700 font-medium">
            – Z aka Vinayak Yambadwar <br />
            Co-Founder | Strategic Architect | Structure Evangelist
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
