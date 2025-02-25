"use client"
import { getAnilistAnimeInfo, getAnimeInfo } from '@/lib/queries';
import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode } from 'react';



export const InfoContext = createContext<any>(undefined);

const InfoContextProvider = ({ children, animeId}: {children: ReactNode, animeId: string | string[] | undefined}) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["animeInfo"],
        queryFn: () => getAnimeInfo(animeId)
      })
    


  return (
    <InfoContext.Provider value={{ data, isLoading, isError, error }}>
        {children}
    </InfoContext.Provider>
)
}

export default InfoContextProvider