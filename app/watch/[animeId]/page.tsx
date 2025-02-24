// Base styles for media player and provider (~400B).
import WatchAnimeComments from '@/components/shared/WatchAnimeComments';
import WatchAnimeWrapper from '@/components/shared/WatchAnimeWrapper';
import '@vidstack/react/player/styles/base.css';


const WatchEpisodes = async ({params}: { params: Promise<{animeId: string}>}) => {
  const animeId = (await params).animeId;
  return (
    <>
      <WatchAnimeWrapper />
      <WatchAnimeComments />
    </>
  )
}
export default WatchEpisodes