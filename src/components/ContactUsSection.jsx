import React, { useState } from 'react';
import { Send } from 'lucide-react'; // Lucide icon
import ModalForm from './ModalForm'; // Form modal component

const contactItems = [
  {
    tag: 'Sales',
    title: 'Connect with BusyAge Team',
    description: 'Request support related to product and service inquiries.',
    tagColor: 'bg-yellow-100 text-yellow-800',
    glow: 'hover:ring-yellow-400',
  },
  {
    tag: 'Compliance',
    title: 'Connect with Compliance',
    description: 'Request support related to documentation and legal matters.',
    tagColor: 'bg-pink-100 text-pink-800',
    glow: 'hover:ring-pink-400',
  },
  {
    tag: 'Careers',
    title: 'Connect with Careers & HR',
    description: 'Explore job, internship or mentorship opportunities.',
    tagColor: 'bg-green-100 text-green-800',
    glow: 'hover:ring-green-400',
  },
  {
    tag: 'Strategy',
    title: 'Connect with Strategic Team',
    description: 'Collaborate on partnerships, ventures, and alliances.',
    tagColor: 'bg-blue-100 text-blue-800',
    glow: 'hover:ring-blue-400',
  },
];

const ContactUsSection = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (title) => setOpenModal(title);
  const handleClose = () => setOpenModal(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white pb-20">
      {/* Modal */}
      {openModal && <ModalForm onClose={handleClose} title={openModal} />}

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-45 text-left">
        <h1 className="text-7xl font-bold text-gray-900 italic mb-4">Contact BusyAge</h1>
        <p className="text-lg italic text-gray-700">
          General support for Real Conversations. Real Connections. Real Growth.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-16 px-6 flex flex-col lg:flex-row gap-10">
        {/* Left side */}
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-extrabold font-mono text-gray-900">General support services</h2>
        </div>

        {/* Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map(({ tag, title, description, tagColor, glow }) => (
            <div
              key={title}
              onClick={() => handleOpen(title)}
              className={`cursor-pointer relative group block rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-xl hover:ring-2 ${glow}`}
            >
              {/* Tag */}
              <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${tagColor}`}>
                {tag}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:underline transition-all">
                {title}
              </h3>
              <p className="text-sm text-gray-600 pr-8">{description}</p>

              {/* Icon */}
              <div className="absolute bottom-4 right-4 text-gray-500 group-hover:text-blue-600 transition-all transform group-hover:translate-x-4">
                <Send size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
