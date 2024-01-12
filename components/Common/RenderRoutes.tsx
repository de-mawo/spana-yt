import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type Props = {
  routes: { url: string; title: string; icon: React.ElementType }[];
};

export function RenderIconsRoutes({ routes }: Props) {
  return (
    <>
      {routes.map((route, index) => (
        <Link href={route.url} key={index} className="my-3 ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className=" bg-slate-50 p-2 text-slate-500 rounded-md dark:bg-black">
                  {React.createElement(route.icon, {
                    size: 24,
                  })}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{route.title} </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      ))}
    </>
  );
}

export  function RenderRoutes({ routes }: Props) {
  return (
    <>
      {routes.map((route, index) => (
        <Link href={route.url} key={index} className="my-4  rounded-md">
          <div className="flex items-center justify-between ">
            <div className="px-3">
              {React.createElement(route.icon, {
                size: 24,
              })}
            </div>
            <div className="w-16">
              <p>{route.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
