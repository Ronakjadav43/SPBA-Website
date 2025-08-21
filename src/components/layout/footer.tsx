'use client';;
import { getMenu } from "@/actions/home";
import { Menutype } from "@/types";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { Facebook, Globe, Instagram } from "lucide-react";
export default function Footer() {

    

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
  


  

  return (
    <footer className="bg-purple-900 text-white py-10">
    <div className="max-w-[1400px] mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-auto">
        {/* <!-- About SPBA --> */}
        {menuData?.map((menu, index) => (
            <div key={index} 
            className={`${index === 0 ? "hidden" : ""}`}
            >
                <h3 className="font-bold text-md">{menu.title}</h3>
                {menu.sub_menus && menu.sub_menus.length > 0 && (
                    <ul className="mt-3 space-y-2 text-gray-300">
                        {menu.sub_menus.map((submenu) => (
                            <li key={submenu.id} className="text-sm">
                                <a href={`/${submenu.slug}`} className="hover:text-white">
                                    {submenu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ))}
         {/* <!-- Social Icons --> */}
         <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white text-xl"><Facebook size={20} color="#ffffff" /></a>
                <a href="#" className="text-gray-300 hover:text-white text-xl"><Instagram size={20} color="#ffffff" /></a>
                <a href="#" className="text-gray-300 hover:text-white text-xl"><Globe size={20} color="#ffffff" /></a>
            </div>
     
    </div>
    <div className="text-center text-gray-300 mt-16">
        <p>Copyright © 2021 Singapore Prestige Brand Award | Powered by SuperInk</p>
    </div>
</footer>
  )
}
