'use client';
import { HomeContext } from '@/context/HomeContextProvider';
import { useContext } from 'react';
import CardList from './CardList';


const CardLists = () => {
    const data: any = useContext(HomeContext);
    
    const topAiring = data?.topAiringAnimes;
    const mostPopular = data?.mostPopularAnimes;
    const mostFavorite = data?.mostFavoriteAnimes;
    const latestCompleted = data?.latestCompletedAnimes;

  return (
    <div>
        <div className='text-slate-900 flex w-full gap-3 text-xl my-10 justify-around flex-wrap'>
            <CardList name="Top Airing" data={topAiring}/>
            <CardList name="Most Popular" data={mostPopular}/>
            <CardList name="Most Favorite" data={mostFavorite}/>
            <CardList name="Latest Completed" data={latestCompleted}/>
        </div>
    </div>
  )
}

export default CardLists