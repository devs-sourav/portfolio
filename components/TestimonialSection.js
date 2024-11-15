"use client";
import {  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, TextSelect } from "lucide-react";
import "swiper/css";
import Header from "./Header";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); 

  const testimonials = [
    {
      name: "Paublo Dybala",
      designation: "CEO of IBM Global",
      feedback:
        "“Drake - A Developer with the creativity, professional and master of code. Much more than what I'm expecting. High quality product & flexible price. Recommended!.”",
      image:
        "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
    },
    {
      name: "Christina Morillo",
      designation: "Product Management of Invision App Inc",
      feedback:
        "“Drake - A Developer with the creativity, professional and master of code. Much more than what I'm expecting. High quality product & flexible price. Recommended!.”",
      image:
        "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
    },
    {
      name: "Phil Foden",
      designation: "Director of Envato LLC",
      feedback:
        "“Drake - A Developer with the creativity, professional and master of code. Much more than what I'm expecting. High quality product & flexible price. Recommended!.”",
      image:
        "https://wpriverthemes.com/HTML/drake/assets/images/testimonial-1.jpg",
    },
  ];

  return (
    <section className="pt-24 pb-40" id="testimonial">
      <div className=" ">
        <div className="mb-16">
          <div className="flex mb-16">
            <Header title="Testimonials" HomeIcon={TextSelect} />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 dark:text-white leading-tight mb-16">
            Trusted by <span className="text-[#FFCC01]">Hundreds of Clients</span>
          </h1>
        </div>

        <div className="relative max-w-4xl max-h-[310px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1}
            className="mb-12"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-12 border-2 border-gray-500 shadow-lg rounded-3xl">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.designation}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base py-8 leading-8">
                    {testimonial.feedback}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-start space-x-4 items-center">
            <button className="swiper-button-prev w-10 h-10 rounded-full border-2 flex items-center justify-center border-gray-500">
              <ChevronLeft className="text-2xl text-primary" />
            </button>
            <div>
              <span className="text-white">{activeIndex} </span>
              <span className="text-gray-500"> / {testimonials.length}</span>
            </div>
            <button className="swiper-button-next w-10 h-10 rounded-full border-2 flex items-center justify-center border-gray-500">
              <ChevronRight className="text-2xl text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
