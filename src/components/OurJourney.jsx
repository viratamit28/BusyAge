import React, { useState } from 'react';

const OurJourney = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <section className="bg-gradient-to-b from-blue-200 via-white to-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="src/assets/O2.jpg" // Make sure this path is correct relative to public or src folder
            alt="Our Journey"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Journey</h2>
          <p className="text-black mb-4 text-justify">
            BusyAge was born out of frustration. Frustration that the startup ecosystem was filled with workshops,
            funding dreams, and high-level advice — but nobody was building the middle layer...
          </p>

          {isExpanded && (
            <div className="text-black transition-all duration-300">
              <p className="mb-3 text-justify">
                So, in 2011, we began — not as consultants, but as builders. Over the years, we’ve structured startups,
                supported MSMEs, collaborated with corporates, and created models like TBBIM to turn business potential into performance.
              </p>
              <p className="mb-3 text-justify">
                BusyAge didn’t start in a boardroom. It started in frustration — the frustration of watching
                brilliant ideas fail not because of effort or market demand, but due to lack of internal systems.
              </p>
              <p className="mb-3 text-justify">
                That’s when we knew: The real gap isn’t money or ideas. It’s architecture. So in 2011,
                BusyAge was born — not as a startup, but as a framework in motion.
              </p>
              <p className="mb-3 text-justify">
                Over the last decade, we’ve designed structural models like TBBIM, trained operational troupes,
                and helped businesses reclaim control over their growth.
              </p>
              <p className="text-justify">
                Today, BusyAge stands not as a service — but as an ecosystem that evolves with its clients.
                And we’re just getting started.
              </p>
            </div>
          )}

          <button
            onClick={toggleReadMore}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
