
import React from "react";
import MainLayout from '../layouts/MainLayout'; 
import EcosystemOverview from "../components/EcosystemOverview";
import EcosystemMap from '../components/EcosystemMap'; // Adjust the import path as necessary
import EcosystemBenefits from '../components/EcosystemBenefits'; // Adjust the import path as necessary

const Ecosystem = () => {
  return (
     <MainLayout>
      <div>
        <EcosystemOverview />
      <EcosystemMap />
        <EcosystemBenefits />
      </div>
    </MainLayout>
  );
};

export default Ecosystem;
