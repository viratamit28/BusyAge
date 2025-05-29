import React from 'react';

const TroupFormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 text-2xl font-bold hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-blue-800">Form a Troup</h2>
        <p className="mb-4 text-gray-600">
          Fill out the form below to begin your journey as a Troup leader.
        </p>

        <form className="space-y-4">
          <input type="text" placeholder="Your Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          <input type="text" placeholder="Troup Name / Idea" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
          <textarea placeholder="Describe Your Vision" className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24"></textarea>

          <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TroupFormModal;
