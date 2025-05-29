import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Ecosystem from "../pages/Ecosystem";
import Services from "../pages/Services"; 
import Solutions from "../pages/Solutions"; 


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Ecosystem" element={<Ecosystem />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Solutions" element={<Solutions />} />
  
  </Routes>
);

export default AppRoutes;
