"use client";
import { HomeData } from "@/types";
import Markdown from "react-markdown";

import { Skeleton } from "../ui/skeleton";
import Img from "../img/img";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function CoOrganisers({ homeData = undefined }: Props) {
  if (!homeData) {
    return (
      <section className="flex">
        <div className="w-full">
          <div className="mx-auto">
            <div className="grid grid-cols-1 items-center">
              <div className="w-full h-full flex-col flex items-center justify-center">
               
                  <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <h3 className="w-full text-4xl text-[#90783e] font-medium pb-6 mt-2 mb-6 inline-block border-b border-[#90783e]">
                      <Skeleton className="w-[300px] h-[45px]" />
                    </h3>

                    <div className="flex flex-col md:flex-row gap-8 my-8 border-b last:border-b-0 pb-8">
                      <div className="min-w-[150px] max-w-[150px]">
                        <Skeleton className="w-[150px] h-[200px]" />

                        <div className="mt-2 flex flex-col gap-2">
                          <Skeleton className="w-full h-[16px]" />
                          <Skeleton className="w-full h-[16px]" />
                          <Skeleton className="w-full h-[16px]" />
                          <Skeleton className="w-full h-[16px]" />
                        </div>
                      </div>

                      <div className="w-full text-black text-[14px] leading-[2.5] flex flex-col gap-4 [&>p>img]:m-auto [&>p>img]:h-[200px] [&>p>a]:text-[#4169e1]">
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
            <div className="w-full h-full flex-col flex items-center justify-center">
              {homeData &&
                homeData.map((data, index) => (
                  <div key={index}>
                    {data.sections
                      .filter(
                        (section) => section.type.type === "Messages"
                      )
                      .map((section) => (
                        <div className="container mx-auto px-4 py-8 max-w-6xl" key={section.id}>
                          <h3 className="w-full text-4xl text-[#90783e] font-medium pb-6 mt-2 mb-6 inline-block border-b border-[#90783e]">
                            {section.title}
                          </h3>

                          {section.section_items.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col md:flex-row gap-16 my-8 border-b last:border-b-0 pb-8"
                            >
                              <div className="min-w-[150px] max-w-[150px]">
                                {item.multipleMedia &&
                                  Array.isArray(item.multipleMedia) &&
                                  item.multipleMedia.map(
                                    (media, mediaIndex) => (
                                      <Img
                                        key={mediaIndex}
                                        src={media?.url ? `${process.env.NEXT_PUBLIC_API_URL}${media.url}` : ''}
                                        width={media?.width}
                                        height={media?.height}
                                        title={media?.name}
                                        className="object-contain"
                                      />
                                    )
                                  )}
                                <div className="mt-2">
                                  <p className="font-semibold text-[14px]">
                                    {item.title}
                                  </p>
                                  <p className="text-sm text-[14px]">
                                    {item.subTitle}
                                  </p>
                                </div>
                              </div>

                              <div className="text-black text-[14px] leading-[2.5] flex flex-col gap-4 [&>p>img]:m-auto [&>p>img]:h-[200px] [&>p>a]:text-[#4169e1]">
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
                          ))}
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
