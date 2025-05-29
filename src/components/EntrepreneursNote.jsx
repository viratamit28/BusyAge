import React from "react";

const EntrepreneursNote = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-20 border-t border-b border-indigo-300 shadow-lg rounded-xl"
      style={{
        backgroundImage: "url('https://your-image-url.com/image.jpg')", // Replace with your desired image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/E1.jpg')",
          filter: 'blur(5px)', // Apply blur to the background image
        }}
      ></div>

      {/* Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-200 opacity-50"></div>

      {/* Text Content */}
      <div className="max-w-6xl mx-auto text-center text-black relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__fadeIn">
          To Entrepreneurs and Wannapreneurs
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 animate__animated animate__fadeIn animate__delay-1s">
          To all the aspiring and visionary entrepreneurs — welcome to BusyAge! Whether you're at the beginning of your entrepreneurial journey or already scaling new heights, we understand that the road to success is both exciting and challenging.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 animate__animated animate__fadeIn animate__delay-2s">
          At BusyAge, we believe in empowering entrepreneurs like you by offering the tools, resources, and partnerships needed to turn your vision into reality. We know that turning an idea into a successful business requires more than just passion — it requires the right support, guidance, and network.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 animate__animated animate__fadeIn animate__delay-3s">
          For the wannapreneurs — it's never too early to start. Whether you're just beginning to explore the world of entrepreneurship or still working on your concept, you are in the right place. Let us help you build a solid foundation and guide you on a path to entrepreneurial success.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-4s">
          Let’s turn your passion into progress and build a thriving business together!
        </p>
        <p className="italic bg-blue-800 text-indigo-200   font-medium mt-8">
          – Z aka Vinayak Yambadwar <br />
          Co-Founder | Strategic Architect | Structure Evangelist
        </p>
      </div>
    </section>
  );
};

export default EntrepreneursNote;
