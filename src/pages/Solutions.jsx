import MainLayout from "../layouts/MainLayout";

import SolutionsByIndustry from "../components/SolutionsByIndustry";
import IndustrySolutions from "../components/IndustrySolutions";

const Solutions = () => {
  return (
     <MainLayout>
      <div className = "bg-gradient-to-b from-white via to-blue-800">
      <SolutionsByIndustry />
      <IndustrySolutions />
      </div>
    </MainLayout>
  );
};

export default Solutions;
