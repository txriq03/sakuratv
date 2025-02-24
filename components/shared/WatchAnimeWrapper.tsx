"use client";
import { useParams } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { useQuery } from "@tanstack/react-query";
import { getAnimeEpisodes, getAnimeInfo } from "@/lib/queries";

const WatchAnimeWrapper = () => {
    const params = useParams();
    const animeId = params.animeId;

    const { data: episodesData, isLoading: isEpisodesLoading } = useQuery({
        queryKey: ["episodeList"],
        queryFn: () => getAnimeEpisodes(animeId)
        })
    
    const { data: animeInfo, isLoading: isAnimeInfoLoading } = useQuery({
            queryKey: ["animeInfo"],
            queryFn: () => getAnimeInfo(animeId)
    })
    
    const episodeList = episodesData?.data.episodes

  return (
    <div className="text-slate-800 m-5">
      <div className="flex gap-2">
        <p>Home</p>
        <p>•</p>
        <p>TV</p>
        <p>•</p>
        <p>{animeId}</p>
      </div>

      <div className="text-slate-800 flex bg-red-500">
        <ScrollArea className=" h-full px-2 bg-teal-300">
            {isEpisodesLoading ? (
                <p>Loading...</p>
            ) : (
                episodeList.map((episode: any, index: any) => (
                    <p>{episode.title}</p>
                ))
            )}
        </ScrollArea>

        <MediaPlayer
        autoPlay
        controls
        hideControlsOnMouseLeave

          title="Anime Episode"
          aspectRatio="16/9"
          className="object-contain"
          src="https://g4fv.jonextugundu.net/_v7/723cf85ac8d1930a30c260a803d14f2d8ffef94c5ebfda071e5b36eebb0d29b74a837aa0b49a284572268164342c648a6d3b1ee1df879929d9a70e8189153d3b8646fcb5e44e8bbfd053291178d1da6e0c8f34eba54f9163deb14878d26609ba01fbd83cda7e369a7a54d0c59b67b7494070058541dbcbef02194e398a56eba3/master.m3u8"
        >
          <MediaProvider/>
        </MediaPlayer>
      </div>
    </div>
  );
};

export default WatchAnimeWrapper;
