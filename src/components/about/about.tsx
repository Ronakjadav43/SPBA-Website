"use client";
import { HomeData } from "@/types";
import Markdown from "react-markdown";

import { Skeleton } from "../ui/skeleton";
import Img from "../img/img";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function About({ homeData = undefined }: Props) {
  if (!homeData) {
    return (
   
       <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 items-center">
              <div className="w-full h-full flex items-center justify-center">
               
                          <div  className="space-y-4 w-full">
                       
                            <div className="p-6 max-w-[1120px] mx-auto">
                              <h3 className="w-full text-4xl text-[#90783e] font-medium pb-6 mt-2 mb-6 inline-block border-b border-[#90783e]">
                              <Skeleton className="w-[300px] h-[45px]" />
                              </h3>
                              <div className="text-black text-[14px] leading-[2.5] flex flex-col gap-4 [&>p>img]:m-auto [&>p>img]:h-[200px] [&>p>a]:text-[#4169e1]">
                              {[...Array(10)].map((_, index) => (
                        <Skeleton key={index} className="w-full h-[16px]" />
                      ))}
                              </div>
                            </div>
                          </div>
                       
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
    );
  }

  return (
   
      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 items-center">
              <div className="w-full h-full flex items-center justify-center">
                {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter((section) => section.type.type === "About")
                      .map((section) =>
                        section.section_items.map((item, index) => (
                          <div key={index} className="space-y-4 w-full">
                            {item.multipleMedia &&
                              Array.isArray(item.multipleMedia) &&
                              item.multipleMedia.map((media) => (
                                <Img
                                  key={index}
                                  src={`${process.env.NEXT_PUBLIC_API_URL}${media.url}`}
                                  width={media.width}
                                  height={media.height}
                                  title={media.name}
                                  className="object-contain"
                                />
                              ))}
                            <div className="p-6 max-w-[1120px] mx-auto">
                              <h3 className="w-full text-4xl text-[#90783e] font-medium pb-6 mt-2 mb-6 inline-block border-b border-[#90783e]">
                                {item.subTitle}
                              </h3>
                              <div className="article-section text-black text-[14px] leading-[2.5] flex flex-col gap-4 [&>p>img]:m-auto [&>p>img]:h-[200px] [&>p>a]:text-[#4169e1]">
                                <Markdown
                                  components={{
                                    a: ({  ...props }) => (
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        {...props}
                                      />
                                    ),
                                  }}
                                >
                                  {item.details}
                                </Markdown>
                              </div>
                            </div>
                          </div>
                        ))
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
