"use client";

import Image from "next/image";
import banner from "@/assets/bannerImage.jpg";
import bannerImage1 from "@/assets/bannerImage1.jpg";
import image2 from "@/assets/image2.jpg";
import image1 from "@/assets/image1.webp";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./style.css";

// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';


export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-container w-full">
            <Image src={banner} alt="Overlay" className="overlay-image" />
            <div className="overlay-text flex items-center justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-white">Unlimited movies, TV shows, and <br /> more Explore now.</h2>
                    <h4 className="text-2xl font-semibold text-white py-5">Plans now start at USD2.99/month.</h4>
                    <input className="px-5 py-3 rounded-3xl outline-none w-[500px]" placeholder="Search a movie or tv show" type="text" name="" id="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container w-full">
            <Image src={banner} alt="Overlay" className="overlay-image" />
            <div className="overlay-text flex items-center justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-white">Unlimited movies, TV shows, and <br /> more Explore now.</h2>
                    <h4 className="text-2xl font-semibold text-white py-5">Plans now start at USD2.99/month.</h4>
                    <input className="px-5 py-3 rounded-3xl outline-none w-[500px]" placeholder="Search a movie or tv show" type="text" name="" id="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container w-full">
            <Image src={banner} alt="Overlay" className="overlay-image" />
            <div className="overlay-text flex items-center justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-white">Unlimited movies, TV shows, and <br /> more Explore now.</h2>
                    <h4 className="text-2xl font-semibold text-white py-5">Plans now start at USD2.99/month.</h4>
                    <input className="px-5 py-3 rounded-3xl outline-none w-[500px]" placeholder="Search a movie or tv show" type="text" name="" id="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container w-full">
            <Image src={banner} alt="Overlay" className="overlay-image" />
            <div className="overlay-text flex items-center justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-white">Unlimited movies, TV shows, and <br /> more Explore now.</h2>
                    <h4 className="text-2xl font-semibold text-white py-5">Plans now start at USD2.99/month.</h4>
                    <input className="px-5 py-3 rounded-3xl outline-none w-[500px]" placeholder="Search a movie or tv show" type="text" name="" id="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container w-full">
            <Image src={banner} alt="Overlay" className="overlay-image" />
            <div className="overlay-text flex items-center justify-center">
                <div>
                    <h2 className="text-5xl font-semibold text-white">Unlimited movies, TV shows, and <br /> more Explore now.</h2>
                    <h4 className="text-2xl font-semibold text-white py-5">Plans now start at USD2.99/month.</h4>
                    <input className="px-5 py-3 rounded-3xl outline-none w-[500px]" placeholder="Search a movie or tv show" type="text" name="" id="" />
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}








