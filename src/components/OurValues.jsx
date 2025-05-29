import React from "react";
import { CheckCircle } from "lucide-react";
import backgroundImage from '../assets/OV1.jpg';


const values = [
  {
    title: "Clarity over Speed",
    description:
      "We believe speed without clarity is chaos in motion. That’s why we don’t rush growth. We design it. We take time to understand, map, and align — because right direction beats fast direction every time.",
    example:
      "Instead of jumping into 10X marketing, we first fix the funnel, the team structure, and the client journey.",
  },
  {
    title: "Structure over Hustle",
    description:
      "Hustle is not a strategy. Structure is what lets hustle become meaningful. At BusyAge, we replace burnout with blueprints. Because long-term success doesn’t come from how hard you run, but how clearly you’re routed.",
    example:
      "An overwhelmed founder was able to step away from day-to-day firefighting within 3 months of our troup-led structuring.",
  },
  {
    title: "Partnership over Projects",
    description:
      "We’re not vendors. We’re collaborators. We don’t disappear after deliverables. We stay invested in your growth as partners who care about your future like it’s ours.",
    example:
      "Multiple clients have evolved from “one-time consultations” to 4+ year transformation partnerships.",
  },
  {
    title: "Sustainability over Shortcuts",
    description:
      "Shortcuts may win the month. Sustainability wins the next decade. We build systems that outlive trends, and processes that don’t need babysitting. Because real scale needs stability, not spikes.",
    example:
      "We replaced a client’s 6 temporary hires with one strong automated + troup-integrated system — saving ₹18L/year.",
  },
  {
    title: "Legacy over Popularity",
    description:
      "We’re not here to look good. We’re here to build what lasts. For us, legacy isn’t about nameplates or social posts — it’s about impact that endures, systems that keep working, and businesses that continue without us.",
    example:
      "BusyAge’s first ever structured client from 2012 still uses 80% of the original design — adapted, but intact.",
  },
];

const OurValues = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* ✅ Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-none scale-105 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* ✅ Optional light gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

      {/* ✅ Foreground Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Our Values</h2>
        <p className="text-center text-blue-700 max-w-2xl mx-auto mb-16">
          These aren’t buzzwords — they’re the principles that guide how we build, collaborate, and grow.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">{value.title}</h3>
              </div>
              <p className="text-gray-700 mb-2">{value.description}</p>
              <p className="text-sm italic text-blue-600">Example: {value.example}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
