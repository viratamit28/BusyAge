import React from 'react';
import MainLayout from "../layouts/MainLayout";
import InvestorHero from "../components/InvestorHero"; // Adjust the import path as necessary
import InvestorSection from "../components/InvestorSection"; // Adjust the import path as necessary
import BcsWhy from '../components/BcsWhy';

const Investor = () => {
    return (
     <MainLayout>
      <div>
      <InvestorHero />
      
       <div className="min-h-screen bg-gradient-to-r from-orange-50 to-blue-100">
      <InvestorSection />
    </div>
    <BcsWhy />
      </div>
    
    </MainLayout>
  );
};
export default Investor;