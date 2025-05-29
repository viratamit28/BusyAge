import React from 'react';
import { MapPin, Mail, Phone, MessageSquare, UserCheck, Users, Send } from 'lucide-react';



const ContactPage = () => {
  return (
   

      <div className=" p-4 mt-10">
        <h2 className="text-6xl font-mono font-bold text-gray-800 mb-6">Location :</h2>
        <div className="rounded-xl border p-6 bg-white shadow-md">
          <div className="mb-4">
            <iframe
              title="BusyAge HQ Location"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen="viewport=yes"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
          <p className="text-gray-700">
            <strong>Address:</strong> BusyAge HQ, Pune, India <br />
            <strong>Working Hours:</strong> Monday to Friday – 10:00 AM to 6:00 PM IST
          </p>
        </div>
      </div>
    
  );
};

export default ContactPage;
