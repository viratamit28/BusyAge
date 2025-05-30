import React from 'react';
import heroImage from '../assets/S2.jpg'; // Use your own image
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Briefcase, Code, Palette, Shield, Settings, HardHat, Rocket } from 'lucide-react';



const services = [
  {
    title: "Business Support Services",
    icon: <Briefcase className="text-blue-600 w-6 h-6" />, 
    desc: "Structured documentation and strategic support services designed to streamline your compliance, clarify your business operations, and position you clearly for growth and investor readiness.",
    gradient: "from-blue-100 to-blue-50",
    offerings: [
      "	Business Structuring",
"Strategic Consulting",
"Compliance & Documentation",
"Organizational SOPs",

    ],
  },
  {
    title: "IT & Platform Development",
    icon: <Code className="text-purple-600 w-6 h-6" />, 
    desc: "Customized technology solutions built on robust frameworks—powered by modern SaaS platforms, secure API integrations, and user-centric development.",
    gradient: "from-purple-100 to-purple-50",
    offerings: [
     "Web, Mobile & ERP Systems",
"SaaS Platforms & CMS Frameworks",
	"API Integrations & Data Structuring",
"Deployment, Hosting, Monitoring",

    ],
  },
  {
    title: "HR & People Support",
    icon: <Palette className="text-pink-600 w-6 h-6" />, 
    desc: "Building impactful brand identities, powerful messaging frameworks, and communication systems that resonate clearly and effectively with your target market.",
    gradient: "from-pink-100 to-pink-50",
    offerings: [
     "HR Setup & Outsourcing",
"Role Mapping & Performance Structure",
"Contracting, Freelance & Remote Coordination",

    ],
  },
  {
    title: "Finance & Legal Ecosystem",
    icon: <Shield className="text-teal-600 w-6 h-6" />, 
    desc: "Integrated professional services combining HR management, legal compliance, and financial structuring under one coordinated ecosystem.",
    gradient: "from-teal-100 to-teal-50",
    offerings: [
     "Chartered Advisory via Associate Bodies",
"Legal Structuring & Contract Support",
"Investor Documentation Readiness",

    ],
  },
  {
    title: "Sales & Outreach Systems",
    icon: <Settings className="text-green-600 w-6 h-6" />, 
    desc: "Systematic and structured operational solutions ensuring seamless execution, continuous process optimization, and improved service delivery efficiency.",
    gradient: "from-green-100 to-green-50",
    offerings: [
     	"Business Enablement CRM",
      "Lead Management & Pitch Design",
   	" Outreach Funnels & Client Journey Setup",

    ],
  },
  {
    title: "Branding & Communication",
    icon: <HardHat className="text-yellow-600 w-6 h-6" />, 
    desc: "Comprehensive infrastructure solutions and engineering project coordination to support business expansions, industrial setups, and technical scalability.",
    gradient: "from-yellow-100 to-yellow-50",
    offerings: [
      "Brand Positioning",
       "Pitch + Deck Design",
	"UI/UX & Visual Identity Structuring",

    ],
  },
  {
    title: "Engineering & Infra Solutions",
    icon: <Rocket className="text-red-600 w-6 h-6" />, 
    desc: "End-to-end entrepreneurial support designed for startups and growing ventures—covering ideation to investor alignment, strategic growth mapping, and structured scaling.",
    gradient: "from-red-100 to-red-50",
    offerings: [
     "Onsite & Remote Project Coordination",
    "Infra Modeling & Execution Support",
    	"Contractor/Agency Alignment & Vendor Systems",
    ],
  },
  {
    title: "E-commerce & Startup Incubation",
    icon: <Rocket className="text-red-600 w-6 h-6" />, 
    desc: "End-to-end entrepreneurial support designed for startups and growing ventures—covering ideation to investor alignment, strategic growth mapping, and structured scaling.",
    gradient: "from-red-100 to-red-50",
    offerings: [
      "Startup Kits & Go Online Solutions",
    	"Marketplace Setup",
    	"Strategic Product Planning & Launch Support",



    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white text-gray-800 ">
      {/* HERO SECTION */}
      <div className="relative h-[400px] flex items-center justify-start overflow-hidden">
        <img
          src={heroImage}
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-576 scale-105"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl pl-10"
        >
          <h1 className="text-4xl md:text-6xl mt-4  leading-px-10 font-bold text-white">
           Solutions for all. <br />Systems for growth.
          </h1>
          <p className="mt-4 text-lg text-gray-100 max-w-2xl">
           At BusyAge, we don’t just deliver services — we deliver ecosystem-driven solutions.
Our model is built to ensure that every challenge you face has a structured response — not just an answer, but a system.
 Whether you're starting from scratch, scaling operations, or re-engineering legacy systems, we align your ambition with our architecture.
<span className="text-pink-200 font-extrabold">We don’t solve problems in silos — we solve them in systems.</span>

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
            {/* <p className="text-gray-700 mb-4">{service.desc}</p>  */}
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
          <h3 className="text-2xl font-bold text-blue-800">What Makes Our Solutions Unique?</h3>
          <ul className="text-gray-700 space-y-4">
            <li>✔ •	System-Led  not service-dependent</li>
            <li>✔ •	Execution-Ready with assigned troup/team</li>
            <li>✔ •	Custom-Aligned to your scale & complexity</li>
            <li>✔ •	Clarity-Backed with documents, SOPs, and checklists</li>
            <li>✔ •	Ecosystem-Integrated via OESIL, PCs, and AOBs</li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg">
              Talk to a Strategist
            </button>
            <button className="bg-white border border-blue-700 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50">
              Get a Solution Plan
            </button>
            <button className="bg-blue-100 text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-200">
              View Our Workflows
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
