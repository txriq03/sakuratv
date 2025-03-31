import Image from "next/image";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import Link from "next/link";

const AnimeWatchInfo = ({ isInfoLoading, animeInfo, animeId }: any) => {
  return (
    <>
      {isInfoLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="px-5 ">
          <Image
            src={animeInfo.poster}
            alt={animeInfo.name}
            height={200}
            width={200}
          />
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
    </>
  );
};

export default AnimeWatchInfo;
