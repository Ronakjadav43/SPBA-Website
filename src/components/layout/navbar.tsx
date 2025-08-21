"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from "@headlessui/react";
import clsx from "clsx";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { ChevronDownIcon } from "lucide-react";
import { getMenu } from "@/actions/home";
import { Menutype } from "@/types";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "../ui/skeleton";

export default function Navbar() {
  const pathname = usePathname();

  const queries = useQueries({
    queries: [
      {
        queryKey: ["menu"],
        queryFn: getMenu,
      },
    ],
  }) as [
    UseQueryResult<Menutype[], Error> // getNews/getSortedNews returns an array of News
  ];

  // Destructuring results for each query
  const [menu] = queries;

  const menuData = menu.data ?? undefined;

  if(!menuData) {
    return (
      <Popover as="header" className="flex flex-col  bg-white">
      {/* sticky top-0 z-[9999] */}
      <div className="flex items-center justify-around  z-50 px-2">
        <div className="max-w-[1400px] w-full flex items-center justify-between">
         
          <Skeleton className="w-[180px] h-[160px]" />

          <Skeleton className="w-[140px] h-[45px]" />

         
        </div>
      </div>

      <div className="relative z-50 flex items-center justify-center w-full bg-white">
        <nav className="mx-auto flex h-12 max-w-[1300px] items-center  px-4 sm:px-6  lg:px-8 border-y">
         
          <div className="flex w-full items-center justify-between gap-3 ">
          {[...Array(8)].map((_, index) => (
          <Skeleton key={index} className="w-[100px] h-[20px]" />
        ))}
          </div>
        </nav>
      </div>
     
    </Popover>
    );
  }

  function Dropdown() {
    return (
      <>
        {menuData &&
          menuData.map((item, index) =>
            item.sub_menus && item.sub_menus.length > 0 ? (
              <div className="relative group" key={index}>
                <div className="flex items-center px-3 py-1 text-sm font-medium text-white outline-none transition duration-300 ease-in-out hover:text-[#522d74] cursor-pointer">
                  <span>{item.title}</span>
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 transform text-white duration-300 group-hover:text-[#522d74] group-hover:rotate-180"
                    aria-hidden="true"
                  />
                </div>

                <div className="absolute right-0 top-[15px] z-20 mt-3 w-80 hidden group-hover:block">
                  <div className="transform space-y-1 rounded-xl bg-white p-0 outline-none drop-shadow">
                    {item.sub_menus.map((subLink, i) => (
                      <div key={`desktop-dropdown-link-${i}`}>
                        <Link
                          href={subLink.slug || "#"}
                          className={clsx(
                            "block rounded-lg px-5 py-3.5 font-medium text-sm",
                            pathname === subLink.slug
                              ? "bg-gray-50 text-[#522d74]"
                              : `text-gray-800 transition duration-300 ease-in-out hover:bg-[#4b2c6d30] hover:text-[#522d74]`
                          )}
                        >
                          {subLink.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.slug || "#"}
                key={index}
                className="px-3 py-1 text-sm font-medium text-white outline-none transition duration-300 ease-in-out hover:text-[#522d74]"
              >
                {item.title}
              </Link>
            )
          )}
      </>
    );
  }

  function DesktopNavigation() {
    return (
      <div className="ml-6 hidden items-center justify-between text-xl md:flex md:space-x-0.5 md:text-base lg:space-x-2">
        <Dropdown />
      </div>
    );
  }

  function HamburgerButton() {
    return (
      <PopoverButton
        className="group relative z-50 flex cursor-pointer items-center justify-center rounded-full bg-gray-50 p-3 shadow-sm ring-1 ring-gray-900/5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none md:hidden"
        aria-label="Toggle Navigation"
      >
        <span className="relative h-3.5 w-4">
          <span className="absolute left-0 top-0 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-[open]:left-1/2 group-data-[open]:top-1.5 group-data-[open]:w-0" />
          <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-[open]:rotate-45" />
          <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-[open]:-rotate-45" />
          <span className="absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-[open]:left-1/2 group-data-[open]:top-1.5 group-data-[open]:w-0" />
        </span>
      </PopoverButton>
    );
  }

  function MobileMenu() {
    return (
      <>
        <PopoverBackdrop
          transition
          className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <PopoverPanel
          transition
          className="absolute inset-x-0 top-[130px] z-40 transform pt-20 data-[closed]:-translate-y-full data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          {({ close }) => (
            <nav
              className="border-b border-gray-300/60 bg-white md:hidden"
              aria-label="Global"
              id="mobile-menu"
            >
             

                <div>
                {(menuData ?? []).map((menu, j) => (
                  menu.sub_menus && menu.sub_menus.length > 0 ? (
                  <Accordion type="single" collapsible key={j}>
                    <AccordionItem
                    value={j.toString()}
                    className="border-t border-gray-300/70"
                    >
                    <AccordionTrigger className="mt-2 px-6 text-xs font-medium uppercase tracking-widest text-gray-500">
                      {menu.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-3 space-y-1 px-2 text-[15px]">
                      {menu.sub_menus.map((menuItem, i) => (
                        <Link
                        key={`mobile-pages-link-${i}`}
                        href={menuItem.slug || "#"}
                        className={clsx(
                          "block rounded-lg px-4 py-2 font-medium",
                          pathname === menuItem.slug
                          ? "bg-gray-50 text-[#522d74]"
                          : `text-gray-600 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-[#522d74]`
                        )}
                        onClick={() => close()}
                        >
                        {menuItem.title}
                        </Link>
                      ))}
                      </div>
                    </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  ) : (
                  <Link
                    key={`mobile-menu-${j}`}
                    href={menu.slug || "#"}
                    className={clsx(
                    "block border-t border-gray-300/70 px-6 py-3 text-sm font-medium",
                    pathname === menu.slug
                      ? "bg-gray-50 text-[#522d74]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#522d74]"
                    )}
                    onClick={() => close()}
                  >
                    {menu.title}
                  </Link>
                  )
                ))}
                </div>
            </nav>
          )}
        </PopoverPanel>
      </>
    );
  }



  return (
    <>
      <Popover as="header" className="flex flex-col  bg-white">
        {/* sticky top-0 z-[9999] */}
        <div className="flex items-center justify-around bg-[url(/img/SPBA-2020-Blank-Header-Bg-01.png)] mt-[-1px] z-50 px-2">
          <div className="max-w-[1400px] w-full flex items-center justify-between">
            <Link href="/">
              <Image
                src="/img/logo.png"
                width={180}
                height={160}
                alt="SPBA 2020 Logo"
              />
            </Link>

            <Link
              href="https://asmeawards.sg/"
              target="_blank"
              className="py-[10px] px-[15px] bg-[#b89e71] font-medium text-[14px] text-center border-[1px]  border-[#ac9265] text-[#ffffff] rounded-[4px]"
            >
              Submit An Entry
            </Link>
          </div>
        </div>

        <div className="relative z-50 flex items-center justify-center w-full bg-[#b89e71]">
          <nav className="mx-auto flex h-12 max-w-[1300px] items-center  px-4 sm:px-6 lg:border-0 lg:px-8">
            {/* max-w-7xl */}
            {/* Main navbar for large screens */}
            <div className="flex w-full items-center justify-between">
              <DesktopNavigation />

              <HamburgerButton />
            </div>
          </nav>
        </div>
        <MobileMenu />
      </Popover>
    </>
  );
}
