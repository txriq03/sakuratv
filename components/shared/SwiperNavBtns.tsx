"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const SwiperNavBtns = () => {
  const swiper = useSwiper();
  return (
    <div className={`text-pink-500 hidden md:flex gap-1 text-sm cursor-pointer flex-col absolute right-[10%] lg:right-[10%] bottom-[30px] md:bottom-[50px] xl:bottom-[80px]`}>
      <div
        onClick={() => swiper.slideNext()}
        className="bg-slate-700 hover:bg-pink-600 rounded-md p-[6px] lg:p-[6px] hover:text-slate-200 transition-colors"
      >
      <ChevronRight className="text-center w-full align-middle" />
      </div>
      <div
        onClick={() => swiper.slidePrev()}
        className="bg-slate-700 hover:bg-pink-600 rounded-md p-[6px] lg:p-[6px]  hover:text-slate-200 transition-colors"
      >
        <ChevronLeft className="text-center" />
      </div>
    </div>


  );
};

export default SwiperNavBtns;
