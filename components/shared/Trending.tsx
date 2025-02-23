"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Poster from "./Poster";
import { HomeContext } from "@/context/HomeContextProvider";
import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Trending = () => {
  const data: any = useContext(HomeContext);
  const swiper = useSwiper();

  const trending = data?.trendingAnimes;
  return (
    <div>
      <div className="flex justify-between  mt-5 pb-2">
        <h2 className="text-slate-900 text-[1.5rem]">Trending</h2>
        
        {/* Buttons */}
        <div className={`text-pink-500 hidden md:flex gap-1 text-sm cursor-pointer`}>
          <div
            onClick={() => swiper.slidePrev()}
            className="bg-pink-200 hover:bg-pink-500 rounded-md p-[6px] lg:p-[6px] hover:text-slate-200 transition-colors"
          >
            <ChevronLeft className="text-center" />
          </div>
          <div
            onClick={() => swiper.slideNext()}
            className="bg-pink-200 hover:bg-pink-500 rounded-md p-[6px] lg:p-[6px]  hover:text-slate-200 transition-colors"
          >
            <ChevronRight className="text-center w-full align-middle" />
          </div>
        </div>

      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={3}
        breakpoints={{
          1280: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 4,
          },
        }}
      >
        {trending?.map((anime: { id: string, poster: string, name: string, rank: number }, index: number) => (
          <SwiperSlide key={index}>
            <Link  href={`/${anime.id}`}>
              <Poster image={anime.poster} title={anime.name} rank={anime.rank}/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
