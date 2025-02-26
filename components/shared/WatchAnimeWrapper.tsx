"use client";
import { useParams, useSearchParams, useRouter, usePathname } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { MediaPlayer, MediaProvider, Track} from "@vidstack/react";
import { useQuery } from "@tanstack/react-query";
import { getAnimeEpisodes, getAnimeInfo, getEpisodeStreamingLink } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";

const WatchAnimeWrapper = () => {
    const router = useRouter();
    const params = useParams();
    const animeId = params.animeId;
    const searchParams = useSearchParams();
    const episodeNum = searchParams.get('ep');
    const episodeId = animeId + "?ep=" + episodeNum;

    
    // Funciton handles alternating colors in episode list
    const alternateColor = (index: number) => {
      if (index == 1 || index % 2 == 1) {
        return "bg-slate-200"
      } else if (index % 2 == 0) {
        return "bg-slate-100"
      }
    }
    
    // List of three queries
    const { data: episodesData, isLoading: isEpisodesLoading } = useQuery({
      queryKey: ["episodeList", animeId],
      queryFn: () => getAnimeEpisodes(animeId)
    })
    const { data: animeData, isError, error, isLoading: isInfoLoading } = useQuery({
      queryKey: ["animeInfo", animeId],
      queryFn: () => getAnimeInfo(animeId)
    })
    const { data: episodeData, isLoading: isEpisodeLoading } = useQuery({
      queryKey: ["episodeData", episodeId],
      queryFn: () => getEpisodeStreamingLink(episodeId)
      
    })

    function getEnglishFile(subtitles: any): string | undefined {
      if (subtitles) {
        const englishSubtitle = subtitles.find((subtitle: any) => subtitle.label.toLowerCase() === 'english');
        return englishSubtitle ? englishSubtitle.file : null;        
      }
    }

    if (isError) {
      console.log("Error:", error)
    } else if (animeData) {
      console.log("Data:", animeData)
    }
    
    const episodeList = episodesData?.data.episodes
    const animeInfo = animeData?.data.anime.info
    
    if (!isEpisodeLoading) {
      console.log("Episode data:", episodeData)
      
    }
    const streamingLink = episodeData?.sources[0].url
    if (streamingLink) {
      console.log("Streaming link:", streamingLink)
    }

    if (episodeData?.sources) {
      console.log("Sources:", episodeData?.sources)
    }
  
    useEffect(() => {
      console.log("episodeData from useEffect:", episodeData)
      if (!episodeNum && episodeData) {
          const firstEpisodeId = episodesData?.data.episodes[0].episodeId
          router.push("/watch/" + animeId + "?ep=" + firstEpisodeId)
      } 
    }, [episodeData])

    return (
      <div className="text-slate-800 mx-auto max-w-[1760px] px-5">
        <div className="flex gap-2 my-2">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <p>•</p>
          <Link href="#" className="hover:text-pink-600">TV</Link>
          <p>•</p>
          {isInfoLoading ? (
            <p>Loading...</p>
          ) : (
            <p className="text-black/50">{animeInfo.name}</p>
          )}
        </div>

      <div className="text-slate-800 flex gap-2 ">
        <div className="flex flex-col rounded-md w-[450px] min-w-[280px] h-[500px]">
          <p className="px-4 text-lg text-slate-200 bg-pink-600 py-1 font-semibold">Episodes</p>
          <ScrollArea className="  bg-slate-100 ">
              {isEpisodesLoading ? (
                  <p>Loading...</p>
              ) : (
                  episodeList.map((episode: any, index: any) => (
                      <Link href={`/watch/${episode.episodeId}`} key={index} className={`flex gap-5 py-1 px-4 cursor-pointer ${alternateColor(index)} hover:bg-pink-100 transition-colors`}>
                          <p>{index + 1}</p>
                          <p>{episode.title}</p>
                      </Link>
                  ))
              )}
          </ScrollArea>

        </div>
        
        <MediaPlayer
          controls
          hideControlsOnMouseLeave
          load="eager"
          title={''}
          aspectRatio="16/9"
          className="h-full"
          src={episodeData?.sources[0].url}
        >
          <MediaProvider/>
          <Track src={`${window.location.origin}/api/vtt?vttUrl=${getEnglishFile(episodeData?.tracks)}`} kind="subtitles" label="English" lang="en-US" type="vtt" default />
        </MediaPlayer>

      {/* Anime information on right side */}
      {isInfoLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-[700px] px-5">
          <Image src={animeInfo.poster} alt={animeInfo.name} height={200} width={200} />
          <h1 className="py-2 text-xl font-semibold">{animeInfo.name}</h1>

          <ScrollArea className="h-[100px] w-full">
            <p>{animeInfo.description}</p>
          </ScrollArea>

          <Link href={"/" + animeId}>
            <Button className="my-2 bg-blue-500 hover:bg-blue-600">
              Details
            </Button>
          </Link>

        </div>
      )}

      </div>


    </div>
  );
};

export default WatchAnimeWrapper;
