"use client";;
import { getHome } from "@/actions/home";
import { HomeData } from "@/types";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import Organisers from "@/components/organisers/organisers";
import About from "@/components/about/about";

export default function Page() {
   
    
  const queries = useQueries({
    queries: [
      {
        queryKey: ["home"],
        queryFn: () => getHome("award-organising-committee"),
      },
    ],
  }) as [UseQueryResult<HomeData[], Error>, UseQueryResult<HomeData, Error>];

  const [home] = queries;

  const homeData = home.data || undefined;


  return (
    <main className="text-center">
     <About homeData={homeData} />

     <div className="max-w-[1200px] m-auto">

      <Organisers homeData={homeData} />
      </div>

     
    </main>
  );
}
