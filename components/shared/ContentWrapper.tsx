"use client"
import { useParams } from "next/navigation"
import Header from "./Header";
import InfoContextProvider from "@/context/InfoContextProvider";

const ContentWrapper = () => {
    const params = useParams();
    const animeId = params.animeId;

    

  return (
    <InfoContextProvider animeId={animeId}>
      <div className="bg-slate-100">
        <Header/>
      </div>
    </InfoContextProvider>

  )
}

export default ContentWrapper