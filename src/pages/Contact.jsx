import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactUsSection from '../components/ContactUsSection';
import ContactPage from '../components/ContactPage';
import FeedbackSection from '../components/FeedbackSection';


const Contact = () => {
  return (
    <MainLayout>
      <ContactUsSection />
      <ContactPage />
      <FeedbackSection />
    
    </MainLayout>
  );
};

export default Contact;
