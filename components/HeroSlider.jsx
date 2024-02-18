"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const HeroSlider = (props) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <div
          className="heroSlider__card"
          style={{
            border: "5px solid #fa98dd",
          }}
        >
          <img
            className="heroSlider__image"
            src="/pexels-nicholas-derio-palacios-19556998.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="heroSlider__card"
          style={{
            border: "5px solid #5c9dff",
          }}
        >
          <img
            className="heroSlider__image"
            src="/florian-olivo-Mf23RF8xArY-unsplash.jpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="heroSlider__card"
          style={{
            border: "5px solid #36ff00",
          }}
        >
          <img
            className="heroSlider__image"
            src="/austin-neill-hgO1wFPXl3I-unsplash.jpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
