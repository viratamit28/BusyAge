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
                "We exist to eliminate chaos from growth journeysBy designing business systems that are scalable, fundable, and sustainable. we enable founders and teams to move from firefighting to future-building.",
            },
            {
              title: "Our Vision",
              content:
                "To become India’s most trusted ecosystem builder  a structured ally for ambitious entrepreneurs and organizations  where ideas evolve into institutions, and every venture has a roadmap, not just a direction.",
            },
            {
              title: "What Drives Us",
              content:
                "BusyAge supports not just business models, but the people behind them. We turn chaos into clarity through systems, not silos. Our goal is to be the structure beneath your growth helping founders lead confidently, teams work smoothly, and visions stay on track. Real support.",
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
