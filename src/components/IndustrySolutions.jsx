import React from "react";
import So2 from '../assets/So2.jpg';
import So3 from '../assets/So3.jpg';
import So4 from '../assets/So4.jpg';
import So5 from '../assets/So5.jpg';
import So6 from '../assets/So6.jpg';
import So7 from '../assets/So7.jpg';
import So8 from '../assets/So8.jpg';


import {
  Briefcase,
  Building,
  Factory,
  ShoppingCart,
  Stethoscope,
  Banknote,
  Puzzle,
} from "lucide-react";

const solutions = [
  {
    title: "Startups & MSMEs",
    image: So2,
    description:
      "Custom-built solutions to empower startups and MSMEs with growth systems and investor readiness.",
    offerings: [
      "Startup Incubation & Mentoring",
      "MSME Growth & Structuring",
      "Investment Readiness Solutions",
      "Compliance & Documentation",
      "Operational Scalability",
    ],
  },
  {
    title: "Corporates & Enterprises",
    image: So3,
    description:
      "Strategic interventions to streamline processes and scale operations across units.",
    offerings: [
      "SOP Integration & Restructuring",
      "Process Optimization",
      "Cross-Department Coordination",
      "Governance & Compliance",
      "Tech Integration",
    ],
  },
  {
    title: "Manufacturing & Industrial",
    image: So4,
    description:
      "Infrastructure execution and systems built for sustainable scalability and quality assurance.",
    offerings: [
      "Facility Setup",
      "Supply Chain Structuring",
      "Production Optimization",
      "Regulatory Compliance",
      "Project Management",
    ],
  },
  {
    title: "Retail, E-Com, FMCG",
    image: So5,
    description:
      "Solutions to scale brand visibility, customer experience, and operational growth.",
    offerings: [
      "Brand Positioning",
      "E-commerce Tech Setup",
      "CRM & Customer Experience",
      "Logistics Optimization",
      "Digital Growth Plans",
    ],
  },
  {
    title: "Healthcare, Pharma & EdTech",
    image: So6,
    description:
      "Compliance-focused systems and digital transformation for sensitive sectors.",
    offerings: [
      "Compliance Documentation",
      "Platform Development",
      "Process Mapping",
      "Strategic Partnerships",
      "Market Expansion",
    ],
  },
  {
    title: "FinTech & Financial Services",
    image: So7,
    description:
      "Solutions emphasizing innovation, compliance, and capital structuring for FinTech firms.",
    offerings: [
      "Compliance Structuring",
      "Platform Integration",
      "Capital Structuring",
      "Risk Management",
      "Customer Journey Mapping",
    ],
  },
  {
    title: "Customized Solutions",
    image: So8,
    description:
      "Tailored strategies crafted through deep consultations and custom ecosystem modeling.",
    offerings: [
      "Needs Assessment",
      "Bespoke Strategy Development",
      "Ecosystem Integration",
      "Functional Coordination",
      "Continuous Advisory",
    ],
  },
];


const IndustrySolutions = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Explore Industry-Specific Solutions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={solution.image}
              alt={solution.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-3">{solution.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {solution.offerings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
<div className="mt-20 px-4">
  <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-700">
    Why Choose <span className="text-gray-900">BusyAge?</span>
  </h3>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <Briefcase className="text-blue-600 w-8 h-8" />,
        title: "Focused Expertise",
        desc: "Industry-specialized teams and domain experts tailored to your business niche.",
      },
      {
        icon: <Factory className="text-blue-600 w-8 h-8" />,
        title: "Structured Implementation",
        desc: "We deploy proven, scalable systems customized to your sector and size.",
      },
      {
        icon: <Building className="text-blue-600 w-8 h-8" />,
        title: "Scalable Ecosystems",
        desc: "Infrastructure and processes designed to grow with you — sustainably and efficiently.",
      },
      {
        icon: <Puzzle className="text-blue-600 w-8 h-8" />,
        title: "Ecosystem Integration",
        desc: "Access BusyAge's cross-functional operational support and partner network.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 text-center"
      >
        <div className="mb-4 flex justify-center">{item.icon}</div>
        <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Action Buttons */}
  <div className="mt-10 flex justify-center gap-4 flex-wrap">
    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm font-medium">
      Discuss Your Industry Need
    </button>
    <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition text-sm font-medium">
      Request Industry Consultation
    </button>
    <button className="bg-white border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition text-sm font-medium">
      Explore Case Studies
    </button>
  </div>
</div>

    </div>
  );
};

export default IndustrySolutions;
