import React, { useState } from 'react';

const WhatMakesUsDifferent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/W1.jpg" // Replace with your image path
            alt="Execution support"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">What Makes Us Different</h2>
          <p className="text-gray-800 mb-4 text-justify">
            We don’t just advise. We architect. We don’t just optimize. We operationalize. Most business providers offer templates — we offer execution.
          </p>

          {expanded && (
            <div className="overflow-hidden text-gray-800 space-y-4 transition-all duration-500 ease-in-out">
              <p>
                What makes us different is not what we say — it’s what we systematically solve. We stay until the system breathes on its own.
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Custom-built solutions for stage and scale</li>
                <li>Execution-backed by troupes and tools</li>
                <li>Investment-aligned processes that attract capital</li>
                <li>Continuous optimization beyond one-time plans</li>
              </ul>
              <p>
                Whether cleaning chaos through SOP mapping or building fund-ready structures, we always begin with your DNA — and then build systems that grow with it.
              </p>
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {expanded ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
