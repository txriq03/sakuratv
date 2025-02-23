import Image from "next/image";

interface Props {
    name: string;
    data?: any;
}

const CardList = ({ name, data}: Props) => {
  return (
    <div className="bg-white w-full rounded-md shadow-lg lg:flex-[40%] md:flex-[40%] xl:flex-[10%]">
        <div className="mx-2">
            <h2 className="font-semibold text-slate-600 my-2">{name}</h2>
            
            {data?.filter((anime: any, idx: number) => idx < 5 ).map((anime: any, index: number) => (
                <div className="flex my-2 gap-3 rounded-md hover:bg-pink-200 cursor-pointer transition-colors" key={index}>
                    <Image src={anime.poster} alt={anime.name} width={64} height={90} className="object-cover h-auto w-auto rounded-md "/>
                    <div className="flex flex-col gap-3 w-full">
                        <h2 className="xl:text-lg text-lg line-clamp-2">{anime.name}</h2>
                        <div className="flex gap-2">
                            <div className="flex gap-[1px] text-base">
                                <p className="font-semibold px-[8px] py-[2px] w-fit rounded-tl-lg rounded-bl-lg bg-pink-400">{anime.episodes.sub}</p>

                                {/* Check if there are any dubbed episodes */}
                                {anime.episodes.dub ? 
                                 <p className="font-semibold px-[8px] py-[2px] w-fit rounded-tr-lg rounded-br-lg bg-teal-400">{anime.episodes.dub}</p>
                                 : 
                                <p></p>
                                }

                            </div>
                            <p className="text-slate-400">•</p>
                            <p className="font-semibold text-lg w-fit rounded-md bg-transparent text-slate-500">{anime.type}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default CardList