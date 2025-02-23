// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';


const WatchEpisodes = async ({params}: { params: Promise<{animeId: string}>}) => {
  const animeId = (await params).animeId;
  return (
    <div>
      <div className="text-slate-800 flex">
        <div>Video: {animeId}</div>
        <MediaPlayer title="Anime Episode" src="https://g4fv.jonextugundu.net/_v7/723cf85ac8d1930a30c260a803d14f2d8ffef94c5ebfda071e5b36eebb0d29b74a837aa0b49a284572268164342c648a6d3b1ee1df879929d9a70e8189153d3b8646fcb5e44e8bbfd053291178d1da6e0c8f34eba54f9163deb14878d26609ba01fbd83cda7e369a7a54d0c59b67b7494070058541dbcbef02194e398a56eba3/master.m3u8">
          <MediaProvider />
        </MediaPlayer>
      </div>
    </div>
  )
}

export default WatchEpisodes