import React, { useState } from "react";
import { X } from "lucide-react";

const InvestorCard = ({ title, subtitle, content, points, bgImage }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden border border-gray-300 rounded-2xl shadow-lg bg-white">
      <div className="flex flex-col md:flex-row h-full">

        
       {/* Image Section */}
  <div
    className={`transition-all duration-500 ${
      expanded ? "w-1/3" : "w-1/2"
    } overflow-hidden`}
  >
    <img
      src={bgImage}
      alt={title}
      className="h-full w-full object-cover"
    />
  </div>


        {/* Content Section */}
        <div
          className={`relative transition-all duration-700 ease-in-out w-full ${
            expanded ? "md:w-full" : "md:w-1/2"
          } p-6 flex flex-col justify-between`}
        >
          {/* Close (X) Button */}
          {expanded && (
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-lg text-gray-600 mb-4">{subtitle}</h3>
            <p className="text-sm text-gray-700">{content}</p>

            {/* Points visible only when expanded */}
            {expanded && (
              <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-2">
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Learn More Button */}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold w-max"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;
