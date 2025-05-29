
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AboutUs from '../components/AboutUs';  
import MissionVisionDrives from '../components/MissionVisionDrives';
import HowWeWorkSection from '../components/HowWeWorkSection';
import OurJourney from '../components/OurJourney';
import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent';
import OurValues from '../components/OurValues';
import FounderNote from '../components/FounderNote';
import EntrepreneursNote from '../components/EntrepreneursNote';



const About = () => {
  return (
    <MainLayout>
      <div>
        <AboutUs />
        <MissionVisionDrives />
        <HowWeWorkSection />
        <OurValues />
        <FounderNote />
      </div>
    </MainLayout>
  );
};

export default About;
