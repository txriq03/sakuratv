'use client'
import { InfoContext } from "@/context/InfoContextProvider"
import Image from "next/image";
import { useContext } from "react"
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";


const Header = () => {
    const params = useParams();
    const animeId = params.animeId;

    const { data, isLoading, isError, error }= useContext(InfoContext);
    const animeData = data?.data.anime.info
    console.log(animeData)

  if (isLoading) { 
    return <h1>Loading...</h1>
  } else if (isError) {
    <h1 className="bg-red-500 font-bold">Error: {error.message}</h1>
  }

  return (
    <div className="text-slate-800 flex py-5 gap-5 px-4 mx-auto max-w-[1680px]">
      
      {/* Image and buttons */}
      <div className="flex flex-col gap-2">
        
        <div className="w-[220px] h-[311px] bg-red-500">
          <Image className="w-full h-auto rounded-md shadow-2xl " priority src={animeData?.poster} height={250} width={353} alt={animeData?.name}/>
        </div>

        <div className="flex gap-2">
        <Link className="w-full" href={`/watch/${animeId}`}>
          <Button className="text-slate-100 bg-blue-400 hover:bg-blue-500 w-full font-semibold text-base">Watch Now</Button>
        </Link>
        <Button className="bg-pink-500 hover:bg-pink-600 p-0 w-[60px]"> <Heart className="text-pink-100"/> </Button>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <h1 className="text-[2rem] font-bold">{animeData?.name}</h1>
        <p>{animeData?.description}</p>
      </div>
    </div>
  )
}

export default Header