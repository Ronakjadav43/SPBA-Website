"use client";
import * as React from "react";
import { HomeData } from "@/types";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Img from "@/components/img/img";
import { Skeleton } from "../ui/skeleton";

type Props = {
    homeData: HomeData[] | undefined
  }

export default function CarouselComponent({homeData = undefined} : Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (!homeData) {
    return (
      <Carousel
          plugins={[plugin.current]}
          className="w-full flex"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
           
                      {[...Array(4)].map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="h-full"
                        >
                          <div className="p-0 h-full">
                            <Card className="p-0 h-full">
                              <CardContent className="flex h-full p-0">
                                <Skeleton className="w-[95vw] h-[966px] m-auto" />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                   
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    )
  }


  return (
   
        <Carousel
          plugins={[plugin.current]}
          className="w-full flex"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {homeData &&
              homeData.map((data, index: number) =>
                data.sections[0].section_items.map(
                  (
                    item: HomeData["sections"][0]["section_items"][0],
                    itemIndex: number
                  ) => (
                    Array.isArray(item.multipleMedia) && item.multipleMedia.map((media, mediaIndex) => (
                      <CarouselItem
                        key={`${index}-${itemIndex}-${mediaIndex}`}
                        className="h-full"
                      >
                        <div className="p-0 h-full">
                          <Card className="p-0 h-full border-0">
                            <CardContent className="flex h-full p-0">
                              <Img
                                src={`${process.env.NEXT_PUBLIC_API_URL}${media.formats.large.url}`}
                                width={100}
                                height={100}
                                title="image"
                                className="!w-[1920px] !h-auto !max-h-[966px] object-cover flex"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))
                  )
                )
              )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
   
  );
}
