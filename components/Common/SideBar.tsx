import * as React from "react";
import Image from "next/image";
import { AdminRoutes, ModeratorRoutes, UserRoutes } from "./Routes";
import { RenderIconsRoutes } from "./RenderRoutes";
import ToggleDarkLight from "./ToggleDarkLight";
import LogoutBtn from "./LogoutBtn";
import { User } from "@prisma/client";

type SideBarProps = {
  user: User;
};

const SideBar = ({ user }: SideBarProps) => {
  const adminIconsRouter = () => {
    return <>{RenderIconsRoutes({ routes: AdminRoutes })}</>;
  };

  const userIconsRouter = () => {
    return <>{RenderIconsRoutes({ routes: UserRoutes })}</>;
  };

  const moderatorIconsRouter = () => {
    return <>{RenderIconsRoutes({ routes: ModeratorRoutes })}</>;
  };

  return (
    <div className="hidden fixed  inset-y-0 left-0 sm:block w-[5rem] bg-white rounded-lg overflow-hidden dark:bg-black dark:border-r">
      <div className="flex flex-col items-center justify-between h-full">
        {/* TOP PART  */}
        <div>
          <div className="my-8">
            <Image src="/spana-b.png" width={50} height={50} alt="logo" />
          </div>

          <nav className="flex flex-col items-center px-3 overflow-y-auto">
            {user?.role === "ADMIN" && adminIconsRouter()}
            {user?.role === "USER" && userIconsRouter()}
            {user?.role === "MODERATOR" && moderatorIconsRouter()}
          </nav>
        </div>
        {/* BOTTOM PART  */}
        <div className="flex flex-col items-center space-y-6 my-8">
          <LogoutBtn />
          <ToggleDarkLight />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
