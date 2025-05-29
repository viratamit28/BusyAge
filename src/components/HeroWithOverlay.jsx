import React from "react";
import { motion } from "framer-motion";
import J2 from "../assets/J2.jpg";
import FounderImage from '../assets/Founder.jpg';

const HeroWithOverlay = () => {
  return (
    <section className="relative w-full h-[120vh] overflow-hidden">
      {/* Background Image */}
      <img
  src={J2}
  alt="Hero Background"
  className="absolute inset-0 object-cover w-full h-full"
/>

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6">
        <motion.div
          className="text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-serif leading-tight tracking-wide">
            <span className="relative inline-block text-white">
              Step In, Scale Up,
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-black rounded"></span>
            </span>
            <br />
            <span className="text-white italic shadow-md">Stay Structured.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mt-4 leading-relaxed font-light">
            BusyAge is not just a workplace; it's an ecosystem where structured roles,
            strategic clarity, and meaningful collaboration drive impactful business
            transformations.
          </p>
        </motion.div>
      </div>

      {/* Founder Section with motion */}
      <motion.div
        className="absolute bottom-[-18px] right-8 flex-col items-center gap-4 bg-white shadow-lg px-5 py-5 rounded-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <img
          src={FounderImage}
          alt="Founder"
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mx-auto"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Vinayak Yambadwar</h3>
          <p className="text-sm text-gray-500">CEO & Founder</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroWithOverlay;
