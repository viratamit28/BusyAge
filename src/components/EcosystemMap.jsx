import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const flowItems = [
  "BusyAge Core",
  "TBBIM",
  "Troups & PCs",
  "AOBs",
  "OESIL",
  "Investor Ready Output",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const EcosystemMap = () => {
  return (
    <section className="bg-gray-600 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ecosystem Map
        </h2>
        <p className="text-white/80 mb-12">
          A visual journey from BusyAge Core to Investor Ready Output — showing the ecosystem's operational flow.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {flowItems.map((item, index) => (
          <motion.div
          drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            key={item}
            className="flex flex-col items-center"
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-sm font-semibold shadow-md w-72 text-center">
              {item}
            </div>
            {index < flowItems.length - 1 && (
              <ArrowDown className="text-blue-400 mt-2 animate-bounce" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemMap;
