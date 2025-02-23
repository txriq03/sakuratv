import Image from "next/image";

interface Props {
  image: string;
  title: string;
  rank: number;
}

const Poster = ({ image, title, rank}: Props) => {
  return (
    <div>
        <div className="">
        <Image className=" object-cover max-h-[348px] h-[5%] w-full rounded-md shadow-lg relative cursor-pointer hover:scale-[110%] transition-all" src={image} alt="poster" width={256} height={356} />

        </div>

        <h2 className="text-slate-800 line-clamp-2 mt-1 hidden sm:line-clamp-2">{title}</h2>
        <div className=" bg-pink-500 absolute top-0 left-0 w-8 h-8  lg:w-10 lg:h-10 rounded-tl-md rounded-br-lg font-bold grid place-items-center">
          {rank.toLocaleString('en-US', { minimumIntegerDigits: 2})}
        </div>
    </div>
  )
}

export default Poster