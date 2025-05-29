import React from "react";
import { Briefcase, TrendingUp, Users, Star } from "lucide-react";

const WhyJoinSection = () => {
  const points = [
    {
      icon: <Briefcase className="text-red-600 w-6 h-6" />, 
      title: "Clear Roles",
      desc: "Defined and structured roles eliminating ambiguity."
    },
    {
      icon: <TrendingUp className="text-black w-6 h-6" />, 
      title: "Growth-Focused",
      desc: "Continuous personal and professional growth opportunities."
    },
    {
      icon: <Users className="text-red-600 w-6 h-6" />, 
      title: "Ecosystem Advantage",
      desc: "Benefit from a network of structured, aligned partners."
    },
    {
      icon: <Star className="text-black w-6 h-6" />, 
      title: "Impactful Work",
      desc: "Meaningful contributions influencing real outcomes."
    }
  ];

  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold inline-block">
          <span className="border-b-4 border-b-green-300 mr-2">Why Join</span>
          <span className="border-b-4 border-black">BusyAge Ecosystem?</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((point, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-600 text-sm">{point.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center gap-4 flex-wrap">
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Apply Now</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Talk to Our Team</button>
        <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">Explore Opportunities</button>
      </div>
    </section>
  );
};

export default WhyJoinSection;
