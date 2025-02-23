import Image from "next/image";
import { Button } from "../ui/button";
import SwiperNavBtns from "./SwiperNavBtns";
import { Calendar, Captions, Info, Mic, Play } from "lucide-react";

interface Props {
  cover: string;
  title: string;
  description: string;
  episodes: {
    sub: number;
    dub?: number;
  };
  otherInfo: string[];
}

const Banner = ({ cover, title, description, episodes, otherInfo }: Props) => {
  const isDubbed = episodes.dub;
  
  const mediaType = otherInfo[0];
  const averageLength = otherInfo[1];
  const releaseDate = otherInfo[2];
  const quality = otherInfo[3];

  return (
    <div className="w-[110%] h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] flex items-center relative">
      {/* Anime cover */}
      <Image
        className="w-full object-cover h-[360px] md:h-[460px] lg:h-[510px] xl:h-[610px] blur-sm brightness-[50%]"
        src={cover}
        width={1587}
        height={610}
        priority
        alt="banner"
      />

      {/* Content on anime cover */}
      <div className="absolute w-[60%] lg:w-[600px] xl:w-[800px] 2xl:w-[800px] left-[20px] md:left-[60px] bottom-[30px] md:bottom-[50px] xl:bottom-[80px]">
        <h2 className="text-[1.2rem] font-bold line-clamp-2 sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem] 2xl:text-[3.5rem]">
          {title}
        </h2>

        <div className="gap-4 font-bold text-[0.8rem] md:text-[0.9rem] flex-nowrap hidden xs:flex my-2">
          <div className="flex gap-1 align-middle h-6">
            <div
              className={`bg-pink-400 grid place-items-center min-w-10 ${
                isDubbed ? "rounded-tl-md rounded-bl-md" : "rounded-md"
              }`}
              aria-label='Subs'
            >
              <div className="flex px-1 gap-1 "> <Captions className="md:w-5 md:h-5 w-4 h-4"/> <p>{episodes.sub}</p> </div>
            </div>

            {isDubbed ? (
              <div className="bg-teal-400 grid place-items-center min-w-10 rounded-tr-md rounded-br-md" aria-label='Dubs'>
                  <div className="flex px-1 gap-1 "> <Mic className="md:w-5 md:h-5 w-4 h-4 mt-[2px] md:mt-0"/> <p>{episodes.dub}</p> </div>
              </div>
            ) : (
              <div></div>
            )}


          </div>

          <p>•</p>

          <div  className="flex gap-1 whitespace-nowrap">
            <Calendar className="h-5 w-5"/>{releaseDate}
          </div>

        </div>

        <p className="text-[1rem] hidden lg:text-[1.2rem] md:line-clamp-2">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-5 h-[45px] lg:h-[55px]">
          <Button className="text-sm h-full px-[10px] lg:px-[15px]  lg:text-xl  bg-pink-600 hover:bg-pink-700 flex gap-2 sm:rounded-[0.3rem]">
            <Play strokeWidth={2.5} className="w-4 h-4 lg:w-5 lg:h-5"/>
            Watch Now
          </Button>
          {/* <Button className="text-sm h-full px-[10px] lg:px-[15px]   lg:text-xl  flex gap-2 sm:rounded-[0.3rem] bg-slate-800">
            <Info strokeWidth={2.5} className="w-4 h-4 lg:w-5 lg:h-5 "/>

            Details
          </Button> */}

          <button>
            <Info strokeWidth={2.5} className="h-full w-auto align-middle my-auto bg-slate-800 hover:bg-slate-900 rounded-md p-3"/>
          </button>
          
        </div>
      </div>

      <SwiperNavBtns />

    </div>
  );
};

export default Banner;
