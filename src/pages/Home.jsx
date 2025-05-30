import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';

import WhyJoinUs from '../components/WhyJoinUs';
import ChooseYourPath from '../components/ChooseYourPath';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      
      <WhyJoinUs />
      <ChooseYourPath />
      <Testimonials />
      <FinalCTA />
    </MainLayout>
  );
};

export default Home;
