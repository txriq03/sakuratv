import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import Link from 'next/link'

const Episodelist = ({episodeList}: any) => {

    // Funciton handles alternating colors in episode list
    const alternateColor = (index: number) => {
        if (index == 1 || index % 2 == 1) {
          return "bg-slate-200"
        } else if (index % 2 == 0) {
          return "bg-slate-100"
        }
      }

  return (
    <div className=" rounded-md">
          <p className="px-4 text-lg text-slate-200 bg-pink-600 py-1 font-semibold">Episodes</p>
          <ScrollArea className="  bg-slate-100 h-[550px]">
              {episodeList == '' ? (
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
  )
}

export default Episodelist