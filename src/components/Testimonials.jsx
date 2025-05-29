import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import dataa1 from '../assets/1.jpg'; 
import datab2 from '../assets/2.jpg';
import datac3 from '../assets/amit.jpg';
import datad4 from '../assets/7.jpg';



const testimonials = [
  {
    image: dataa1,
    title: "Kritika is mentoring new entrepreneurs",
    supporters: "8,780 supporters",
  },
  {
    image: datab2,
    title: "Sahil is building tech startup templates",
    supporters: "4,488 supporters",
  },
  {
    image:datac3,
    title: "Rohit is creating marketing playbooks",
    supporters: "1,805 supporters",
  },
  {
    image: datad4,
    title: "Deepak is hosting wellness retreats like a pro",
    supporters: "2,300 supporters",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-black to-blue-200">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Loved by Doers & Builders
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl p-6 shadow-xl transform hover:-translate-y-2 hover:rotate-1 transition duration-300 flex flex-col items-center text-center">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />

                {/* Title */}
                <p className="text-gray-800 font-semibold mb-4">
                  {item.title}
                </p>

                {/* Supporters */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 
                    12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 
                    3.41 0.81 4.5 2.09C13.09 3.81 14.76 
                    3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                    6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{item.supporters}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
