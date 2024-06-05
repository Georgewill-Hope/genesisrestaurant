"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide = ({ children }) => {
  return (
    <section className="mb-10 lg:mb-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
      >
        {children}
      </Swiper>
    </section>
  );
};

export default Slide;
