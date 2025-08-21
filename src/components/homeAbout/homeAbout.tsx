"use client";
import { HomeData } from "@/types";
import Markdown from "react-markdown";

import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function HomeAbout({ homeData = undefined }: Props) {


if(!homeData) {
  return (
<main className="pb-10">
      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Video Column 1 */}
              <div className="w-full">
              <Skeleton className="w-full h-[500px]" />
              </div>

              {/* Content Column */}
              <div className="w-full h-full [box-shadow:0px_0px_7px_0px_rgba(168,_168,_168,_0.5)] flex items-center justify-center py-8 px-16">
               
                
                          <div className="space-y-4 w-full">
                            <Skeleton className="w-[200px] h-[45px]" />
                            <div className="flex flex-col gap-2">
                            {[...Array(5)].map((_, index) => (
                            <Skeleton key={index} className="w-full h-[20px]" />
                          ))}
                            </div>

                            <Skeleton className="w-[100px] h-[40px]" />
                          </div>
                     
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Content Column */}
              <div className="w-full h-full [box-shadow:0px_0px_7px_0px_rgba(168,_168,_168,_0.5)] flex items-center justify-center py-8 px-16">
              <div className="space-y-4 w-full">
                            <Skeleton className="w-[200px] h-[45px]" />
                            <div className="flex flex-col gap-2">
                            {[...Array(5)].map((_, index) => (
                            <Skeleton key={index} className="w-full h-[20px]" />
                          ))}
                            </div>

                            <Skeleton className="w-[100px] h-[40px]" />
                          </div>
              </div>

              {/* Video Column 1 */}
              <div className="w-full">
              <Skeleton className="w-full h-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}


  return (
    <main className="pb-10">
      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Video Column 1 */}
              <div className="w-full">
                {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter(
                        (section) => section.type.type === "About SPBA Home"
                      )
                      .map((section) =>
                        section.section_items.map((item, index) => (
                          <video
                            key={index}
                            className="w-full shadow-lg"
                            controls
                            preload="metadata"
                          >
                            <source
                              src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
                              type={item.image.mime}
                            />
                            Your browser does not support the video tag.
                          </video>
                        ))
                      )
                  )}
              </div>

              {/* Content Column */}
              <div className="w-full h-full [box-shadow:0px_0px_7px_0px_rgba(168,_168,_168,_0.5)] flex items-center justify-center py-8 px-16">
                {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter(
                        (section) => section.type.type === "About SPBA Home"
                      )
                      .map((section) =>
                        section.section_items.map((item, index) => (
                          <div key={index} className="space-y-4">
                            <h3 className="text-3xl text-[#90783e] font-medium pb-2 inline-block">
                              {item.subTitle}
                            </h3>
                            <div className="text-black text-[14px] leading-[2.5]">
                              <Markdown>{item.details}</Markdown>
                            </div>

                            <Link
                              href={item.URL || "#"}
                              target="_blank"
                              className="py-[10px] px-[15px] bg-[#b89e71] font-medium text-[14px] text-center border-[1px] border-[#ac9265] text-[#ffffff] rounded-[4px]"
                            >
                              View Detail
                            </Link>
                          </div>
                        ))
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Content Column */}
              <div className="w-full h-full [box-shadow:0px_0px_7px_0px_rgba(168,_168,_168,_0.5)] flex items-center justify-center py-8 px-16">
                {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter(
                        (section) =>
                          section.type.type === "SPBA Categories Home"
                      )
                      .map((section) =>
                        section.section_items.map((item, index) => (
                          <div key={index} className="space-y-4">
                            <h3 className="text-3xl text-[#90783e] font-medium pb-2 inline-block">
                              {item.subTitle}
                            </h3>
                            <div className="text-black text-[14px] leading-[2.5]">
                              <Markdown>{item.details}</Markdown>
                            </div>

                            <Link
                              href={item.URL || "#"}
                              target="_blank"
                              className="py-[10px] px-[15px] bg-[#b89e71] font-medium text-[14px] text-center border-[1px] border-[#ac9265] text-[#ffffff] rounded-[4px]"
                            >
                              View Detail
                            </Link>
                          </div>
                        ))
                      )
                  )}
              </div>

              {/* Video Column 1 */}
              <div className="w-full">
                {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter(
                        (section) =>
                          section.type.type === "SPBA Categories Home"
                      )
                      .map((section) =>
                        section.section_items.map((item, index) => (
                          <video
                            key={index}
                            className="w-full shadow-lg"
                            controls
                            preload="metadata"
                          >
                            <source
                              src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
                              type={item.image.mime}
                            />
                            Your browser does not support the video tag.
                          </video>
                        ))
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
