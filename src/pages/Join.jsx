
import MainLayout from "../layouts/MainLayout";
import HeroWithOverlay from "../components/HeroWithOverlay";
import ChooseYourPath from "../components/ChooseYourPath"; 
import WhyJoinSection from "../components/WhyJoinSection"; // Adjust the import path as necessary



const Join = () => {
  return (
     <MainLayout>
     <div>
       <HeroWithOverlay />
       <ChooseYourPath />
       <WhyJoinSection />
      
     </div>
    </MainLayout>
  );
};

export default Join;
