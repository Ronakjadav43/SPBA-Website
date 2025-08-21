"use client";
import { HomeData } from "@/types";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function News({ homeData = undefined }: Props) {
  if (!homeData) {
    return (
      <section className="max-w-[1400px] mx-auto py-10">
        <Skeleton className="w-[260px] h-[40px] m-auto" />
        <div className="w-16 h-1 bg-[#90783e] mx-auto my-4"></div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md h-[240px] grid"
            >
              <Skeleton className="w-[150px] h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-[150px] h-[20px]" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1400px] mx-auto py-10">
      <h2 className="text-4xl font-medium text-center text-[#90783e]">
        SPBA News
      </h2>
      <div className="w-16 h-1 bg-[#90783e] mx-auto my-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-8">
        {homeData &&
          homeData.map((data) =>
            data.sections
              .filter((section) => section.type.type === "SPBA News")
              .map((section) =>
                [...section.section_items]
                  .sort(
                    (a, b) =>
                      new Date(b.date || "").getTime() -
                      new Date(a.date || "").getTime()
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md h-[240px] grid"
                    >
                      <h4 className="text-md">
                        {new Date(item.date ?? new Date()).toLocaleDateString(
                          "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </h4>
                      <p className="text-[#95774c] mt-2 font-light">
                        {item.title}
                      </p>
                      <Link
                        // href={`${process.env.NEXT_PUBLIC_API_URL}${item.uploadDocument?.url}`}
                        href="#"
                        target="_blank"
                        className="text-[#90783e] mt-2 block"
                      >
                        Read More
                      </Link>
                    </div>
                  ))
              )
          )}
      </div>
    </section>
  );
}
