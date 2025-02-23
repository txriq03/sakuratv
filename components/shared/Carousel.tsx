"use client";
import Banner from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import { useContext } from "react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { HomeContext } from "@/context/HomeContextProvider";

const Carousel = () => {
  const data: any = useContext(HomeContext);

  const spotlightAnime = data?.spotlightAnimes || [];

  return (
    <Swiper
      autoplay={{ delay: 5000}}
      pagination={{ enabled: false }}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        768: {
          pagination: { 
            enabled: true
          }
        }
      }}
    >
      {spotlightAnime?.map((anime: any, index: number) => (
        <SwiperSlide key={index}>
          <Banner cover={anime.poster} title={anime.name} description={anime.description} episodes={anime.episodes} otherInfo={anime.otherInfo}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
