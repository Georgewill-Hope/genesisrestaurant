"use client";

import { SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";
import { SlideData } from "@/_data";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Slide>
        {SlideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-[23vh] md:h-[45vh] lg:h-[65vh] relative">
              <Image
                src={slide.img}
                alt="advert"
                placeholder="blur"
                blurDataURL={slide.img}
                fill
                className={`object-cover ${
                  slide.id === 9 ? "object-center" : "object-top"
                }`}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Slide>
    </section>
  );
};

export default Hero;
