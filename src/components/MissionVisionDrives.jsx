import React from "react";

const MissionVisionDrives = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-black px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Mission • Vision • Drives
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Our Mission",
              content:
                "To build foundational business systems that empower founders and teams to grow sustainably and strategically.",
            },
            {
              title: "Our Vision",
              content:
                "To be the backbone of executable businesses across the globe — turning potential into performance.",
            },
            {
              title: "What Drives Us",
              content:
                "Frustration with fluff. Passion for structure. A relentless belief that businesses deserve better systems, not just slogans.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-blue-200"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionDrives;
