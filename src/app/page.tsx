"use client";;
import * as React from "react";
import { getHome } from "@/actions/home";
import { HomeData } from "@/types";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import CarouselComponent from "@/components/carousel/carousel";
import Organisers from "@/components/organisers/organisers";
import HomeAbout from "@/components/homeAbout/homeAbout";
import News from "@/components/news/news";
import Gallery from "@/components/gallery/gallery";

export default function Home() {
  const queries = useQueries({
    queries: [
      {
        queryKey: ["home"],
        queryFn:() => getHome("home"),
      },
    ],
  }) as [UseQueryResult<HomeData[], Error>, UseQueryResult<HomeData, Error>];

  const [home] = queries;

  const homeData = home.data || undefined;


  return (
    <main>
      <CarouselComponent homeData={homeData} />

      <Organisers homeData={homeData} />

      <HomeAbout homeData={homeData} />

      <News homeData={homeData} />

      <Gallery homeData={homeData} />
    </main>
  );
}
