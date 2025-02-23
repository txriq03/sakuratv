'use client';
import { HomeContext } from "@/context/HomeContextProvider";
import Image from "next/image";
import { useContext } from "react";

const LatestEpisodes = () => {
    const data: any = useContext(HomeContext);
    const latestEpisodes = data?.latestEpisodeAnimes;

  return (
    <>
        <div className='text-2xl text-slate-800'>Latest Episodes</div>

        <div className="flex gap-3 flex-wrap">
            {latestEpisodes?.map((anime: any, index: number) => (
                <div key={index}>
                    <Image src={anime.poster} width={200} height={200} className="object-cover" alt={anime.name} />
                </div>
            ))}
        </div>
    </>
  )
}

export default LatestEpisodes