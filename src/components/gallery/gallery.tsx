"use client";
import * as React from "react";
import { HomeData } from "@/types";
import Img from "@/components/img/img";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function Gallery({ homeData = undefined }: Props) {
  if (!homeData) {
    return (
      <section className="max-w-[1400px] mx-auto py-10">
        <Skeleton className="w-[260px] h-[40px] m-auto" />
        <div className="w-16 h-1 bg-[#90783e] mx-auto my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8 px-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md  grid">
              <Skeleton className="w-[325px] h-[210px]" />
            </div>
          ))}
        </div>

        <div className="flex justify-end w-full mt-4 px-8">
          <Skeleton className="w-[160px] h-[45px]" />
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1400px] mx-auto py-10">
      <h2 className="text-4xl font-medium text-center text-[#90783e]">
        Event Gallery
      </h2>
      <div className="w-16 h-1 bg-[#90783e] mx-auto my-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8 px-8">
        {homeData &&
          homeData.map((data) =>
            data.sections
              .filter((section) => section.type.type === "Event Gallery")
              .map((section) =>
                section.section_items.map(
                  (item) =>
                    Array.isArray(item.multipleMedia) &&
                    item.multipleMedia.map(
                      (
                        media: {
                          url: string | undefined;
                          width: number | undefined;
                          height: number | undefined;
                          name: string;
                        },
                        index: React.Key | null | undefined
                      ) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-md  grid"
                        >
                          <Img
                            src={`${process.env.NEXT_PUBLIC_API_URL}${media.url}`}
                            width={media.width}
                            height={media.height}
                            title={media.name}
                            className="object-contain"
                          />
                        </div>
                      )
                    )
                )
              )
          )}
      </div>

      <div className="flex justify-end w-full mt-4 px-8">
        <Link
          href="#"
          target="_blank"
          className="py-[10px] px-[15px] bg-[#846c32] font-medium text-[14px] text-center border-[1px]  border-[#ac9265] text-[#ffffff] rounded-[4px]"
        >
          View Photo Gallery
        </Link>
      </div>
    </section>
  );
}
