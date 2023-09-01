"use client";
import React, { useRef, useState } from "react";
import images1 from "@/assets/latestMovie/images1.jpg";
import images2 from "@/assets/latestMovie/images2.jpg";
import images3 from "@/assets/latestMovie/images3.jpg";
import images4 from "@/assets/latestMovie/images4.jpg";
import images5 from "@/assets/latestMovie/images5.jpg";
import images6 from "@/assets/latestMovie/images6.jpg";
import images7 from "@/assets/latestMovie/images7.jpg";
import images8 from "@/assets/latestMovie/images8.jpg";
import images9 from "@/assets/latestMovie/images9.jpg";
import images10 from "@/assets/latestMovie/images10.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const ThrillerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="m"
      >
        <SwiperSlide>
          <div>
            <Image
              src={images1}
              className="h-[550px] w-full rounded-2xl bg-black hover:translate-x-2"
              alt="image slider"
            />
            <div className="text-left">
              <h3 className="text-white">Oct 21,2021</h3>
              <p className="radial-progress text-white" style={{ "--value": 70 }}>70%</p>
              <h2 className="text-white">Invasion</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images2}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images3}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images4}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images5}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images6}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images7}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images8}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images9}
            className="h-[550px] w-full rounded-2xl "
            alt="image slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images10}
            className="h-[550px] w-full"
            alt="image slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ThrillerSlider;
