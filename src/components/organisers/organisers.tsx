"use client";
import Img from "@/components/img/img";
import { HomeData } from "@/types";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function Organisers({ homeData = undefined }: Props) {
  if (!homeData) {
    return (
      <section className="w-full py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
              >
                <div className="relative group overflow-hidden rounded-lg p-5 transition-all duration-300">
                  <div className="flex justify-center items-center ">
                    <div className="relative">
                      <Skeleton className="w-[260px] h-[200px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          {homeData &&
            homeData.map((data) =>
              data.sections
                .filter((section) => section.type.type === "Co-Organisers")
                .map((section) =>
                  section.section_items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                    >
                      <div className="relative group overflow-hidden rounded-lg p-5 transition-all duration-300">
                        <div className="flex justify-center items-center ">
                          <div className="relative">
                            <Img
                              src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
                              width={item.image.width}
                              height={item.image.height}
                              title={item.title}
                              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-white/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white p-2"></div>
                          <Link
                            href={item.URL || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-medium hover:underline text-center"
                          >
                            {item.subTitle}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )
            )}
        </div>
      </div>
    </section>
  );
}
