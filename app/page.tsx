import { Trending, Carousel, CardLists, LatestEpisodes } from '@/components/shared'
import HomeContextProvider from '@/context/HomeContextProvider'

const Home = () => {
  return (
      <HomeContextProvider>
        <Carousel/>
        <div className='mx-1 md:mx-5 xl:mx-10'>
          <Trending />
          <CardLists />
          {/* <LatestEpisodes /> */}
        </div>
      </HomeContextProvider>
  )
}

export default Home