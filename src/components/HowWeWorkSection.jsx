
import React from 'react';
import { FaCogs, FaDraftingCompass, FaUsersCog } from 'react-icons/fa';

const workSteps = [
  {
    title: 'Step 1: System Diagnosis',
    icon: <FaCogs className="text-blue-200 text-4xl mb-4" />,
    description:
      'We audit existing structures to find chaos points — places where scale breaks down or clarity is missing.',
  },
  {
    title: 'Step 2: Framework Design',
    icon: <FaDraftingCompass className="text-blue-200 text-4xl mb-4" />,
    description:
      'We co-create customized systems aligned with your vision, goals, and team dynamics — not cookie-cutter templates.',
  },
  {
    title: 'Step 3: Execution Support',
    icon: <FaUsersCog className="text-blue-200 text-4xl mb-4" />,
    description:
      'We stay with you — via troup-led execution, strategic checkpoints, and iterative updates to keep momentum.',
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-blue-200 py-20">
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className="bg-black/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
