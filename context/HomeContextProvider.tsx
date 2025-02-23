"use client";
import { getHomeScreen } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode } from "react";

export const HomeContext = createContext(undefined);

const HomeContextProvider = ({children}: {children: ReactNode}) => {
    const { data } = useQuery({
        queryKey: ["homeData"],
        queryFn: () => getHomeScreen()
      })
      
  return (
    <HomeContext.Provider value={data}>
        {children}
    </HomeContext.Provider>
)
}

export default HomeContextProvider