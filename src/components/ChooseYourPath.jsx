import React, { useState } from 'react';
import TroupFormModal from './TroupFormModal';
import data7 from '../assets/7.jpg'; 
import data8 from '../assets/8.jpg';
import data9 from '../assets/9.jpg';
import data10 from '../assets/10.jpg';
import data11 from '../assets/11.jpg';
import data12 from '../assets/12.jpg';



const ChooseYourPath = () => {
   const [showFormModal, setShowFormModal] = useState(false);
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-blue-200 to-black">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Choose Your Path
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {/* Troup Member Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data7} alt="Troup Member" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Troup Member</h3>
            <p className="text-gray-600 mb-6 text-center">
              Doers trained for real execution. Apply your skills, join live projects, or evolve into core teams.
            </p>
            <button
                      onClick={() => setShowFormModal(true)}

             className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Become a Troup Member
            </button>
          </div>

          {/* Consultant / Expert Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data8} alt="Consultant / Expert" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Consultant / Expert</h3>
            <p className="text-gray-600 mb-6 text-center">
              Bring your domain into action. Advisory, design, training, or strategy roles based on your expertise.
            </p>
            <button onClick={() => setShowFormModal(true)}
              className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Join as Consultant
            </button>
          </div>

          {/* Platform Coordinator Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data9} alt="Platform Coordinator" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Platform Coordinator</h3>
            <p className="text-gray-600 mb-6 text-center">
              Bridge between client vision and troup action. Manage ops, systems, delivery — structured training included.
            </p>
            <button 
               onClick={() => setShowFormModal(true)}
            className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Apply as Platform Coordinator
            </button>
          </div>

          {/* Partner Organization Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data10} alt="Partner Organization" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Partner Organization</h3>
            <p className="text-gray-600 mb-6 text-center">
              Collaborate as a strategic delivery node. Legal, HR, Tech, and Marketing firms integrate into our execution ecosystem.
            </p>
            <button
               onClick={() => setShowFormModal(true)}
            className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Partner as AOB
            </button>
          </div>

          {/* Investor / Enabler Card */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data11} alt="Investor / Enabler" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Investor / Enabler</h3>
            <p className="text-gray-600 mb-6 text-center">
              Support ventures through curated deal flow. Access structured insights, documented readiness, and aligned investment opportunities.
            </p>
            <button 
               onClick={() => setShowFormModal(true)}
            className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Explore Investment Opportunities
            </button>
          </div>

          {/* ➡️ Form a Troup Card (New) */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center p-8">
            <div className="w-24 h-24 mb-6">
              <img src={data12} alt="Form a Troup" className="w-full h-full rounded-full object-cover border-2 border-blue-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Form a Troup</h3>
            <p className="text-gray-600 mb-6 text-center">
              Build your own team of doers. Create, lead, and scale troup-driven execution squads.
            </p>
            <button 
               onClick={() => setShowFormModal(true)}
            className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition">
              Start Your Troup
            </button>
          </div>

        </div>
      </div>
         {/* 🧾 Modal Form */}
      {showFormModal && (
        <TroupFormModal onClose={() => setShowFormModal(false)} />
      )}
    </section>
  );
};

export default ChooseYourPath;
