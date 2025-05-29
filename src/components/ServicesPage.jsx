import React from 'react';
import heroImage from '../assets/S2.jpg'; // Use your own image
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Briefcase, Code, Palette, Shield, Settings, HardHat, Rocket } from 'lucide-react';



const services = [
  {
    title: "Business Support & Documentation",
    icon: <Briefcase className="text-blue-600 w-6 h-6" />, 
    desc: "Structured documentation and strategic support services designed to streamline your compliance, clarify your business operations, and position you clearly for growth and investor readiness.",
    gradient: "from-blue-100 to-blue-50",
    offerings: [
      "Company Formation & Compliance",
      "Strategic Business Plans & Reports",
      "Investor-Ready Documentation",
      "SOP Development & Implementation",
      "Governance & Regulatory Support",
    ],
  },
  {
    title: "Technology Development & SaaS",
    icon: <Code className="text-purple-600 w-6 h-6" />, 
    desc: "Customized technology solutions built on robust frameworks—powered by modern SaaS platforms, secure API integrations, and user-centric development.",
    gradient: "from-purple-100 to-purple-50",
    offerings: [
      "Web & Mobile Application Development",
      "Custom ERP & SaaS Solutions",
      "API Development & Integrations",
      "Technology Architecture & Deployment",
      "Cloud Hosting & Monitoring Services",
    ],
  },
  {
    title: "Branding & Communication Systems",
    icon: <Palette className="text-pink-600 w-6 h-6" />, 
    desc: "Building impactful brand identities, powerful messaging frameworks, and communication systems that resonate clearly and effectively with your target market.",
    gradient: "from-pink-100 to-pink-50",
    offerings: [
      "Brand Strategy & Positioning",
      "Visual Identity Design (Logos, Graphics, UI/UX)",
      "Corporate & Marketing Communications",
      "Pitch Deck Creation & Investor Presentations",
      "Digital & Social Media Strategy",
    ],
  },
  {
    title: "HR, Legal & Finance Coordination",
    icon: <Shield className="text-teal-600 w-6 h-6" />, 
    desc: "Integrated professional services combining HR management, legal compliance, and financial structuring under one coordinated ecosystem.",
    gradient: "from-teal-100 to-teal-50",
    offerings: [
      "HR Setup & Talent Management Systems",
      "Legal Documentation & Advisory Services",
      "Financial Planning & Investor Coordination",
      "Payroll & Statutory Compliance",
      "Vendor Contracting & Negotiations",
    ],
  },
  {
    title: "Operations & Delivery Enablement",
    icon: <Settings className="text-green-600 w-6 h-6" />, 
    desc: "Systematic and structured operational solutions ensuring seamless execution, continuous process optimization, and improved service delivery efficiency.",
    gradient: "from-green-100 to-green-50",
    offerings: [
      "Process Mapping & Optimization",
      "Operational SOPs & Checklists",
      "Delivery Management Systems",
      "Customer Experience Management",
      "Continuous Improvement Programs (CIP)",
    ],
  },
  {
    title: "Engineering & Infra Execution",
    icon: <HardHat className="text-yellow-600 w-6 h-6" />, 
    desc: "Comprehensive infrastructure solutions and engineering project coordination to support business expansions, industrial setups, and technical scalability.",
    gradient: "from-yellow-100 to-yellow-50",
    offerings: [
      "Project Coordination & Execution",
      "Infrastructure Setup & Management",
      "Contractor & Vendor Coordination",
      "Technical Project Management",
      "Quality Assurance & Compliance Checks",
    ],
  },
  {
    title: "Start-up, Scale-up & Funding Readiness",
    icon: <Rocket className="text-red-600 w-6 h-6" />, 
    desc: "End-to-end entrepreneurial support designed for startups and growing ventures—covering ideation to investor alignment, strategic growth mapping, and structured scaling.",
    gradient: "from-red-100 to-red-50",
    offerings: [
      "Start-up Launch Kits & Mentorship",
      "Scale-up Roadmaps & Operational Plans",
      "Investor Pitch Deck & Due Diligence Preparation",
      "Market Entry & Expansion Strategies",
      "Funding Readiness Training & Support",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <div className="relative h-[400px] flex items-center justify-start overflow-hidden">
        <img
          src={heroImage}
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-130 scale-105"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl pl-10"
        >
          <h1 className="text-4xl md:text-6xl  leading-px-10 font-bold text-white">
            Solutions That Structure, Systems That Scale
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl">
            BusyAge doesn't just offer services; we deliver strategic, structured solutions
            that integrate seamlessly into your business, ensuring clarity, scalability,
            and sustainable growth.
          </p>
        </motion.div>
      </div>

      {/* SERVICE BLOCKS */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-2">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay:  0.1 * idx }}
            className={`group p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${service.gradient} hover:from-white hover:to-${service.gradient.split("to-")[1]} hover:shadow-xl`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h2 className="text-xl font-semibold text-blue-800">{service.title}</h2>
            </div>
            <p className="text-gray-700 mb-4">{service.desc}</p>
            <ul className="space-y-2 text-gray-700 mb-4">
              {service.offerings.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-1 text-blue-800 font-medium hover:underline">
              Read More <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* CTA BLOCK */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-blue-800">Why Choose BusyAge Services?</h3>
          <ul className="text-gray-700 space-y-4">
            <li>✔ Structured Approach: Every service follows a clearly defined SOP and methodology.</li>
            <li>✔ System Integration: Seamless with your existing ecosystem.</li>
            <li>✔ Scalable Delivery: Services that grow with your business.</li>
            <li>✔ Ecosystem Advantage: Leverage AOBs, PCs, Troups, and ZSoul.</li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg">
              Book a Consultation
            </button>
            <button className="bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50">
              Request Service Proposal
            </button>
            <button className="bg-blue-100 text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-200">
              Talk to Our Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
