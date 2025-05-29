import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ecosystem from './pages/Ecosystem'; 
import Services from './pages/Services'; 
import Solutions from './pages/Solutions';
import Investor from './pages/Investor';
import Join from './pages/Join';
import Contact from './pages/Contact'; // Assuming you have a Contact page



const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Ecosystem" element={<Ecosystem />} /> 
        <Route path="/Services" element={<Services />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Contact" element={<Contact />} />
        

       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
