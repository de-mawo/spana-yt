
import { PiBellRingingDuotone } from "react-icons/pi";
import { BiSolidChevronDown } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from "./Container"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SideBarDrawer from "./SideBarDrawer";
import ToggleDarkLight from "./ToggleDarkLight";
import { User } from "@prisma/client";
import LogoutBtn from "./LogoutBtn";

type HeaderProps = {
  user: User;
};

const Header = ({ user }: HeaderProps) => {
  return (
    <Container>
      <header className=" z-10 bg-white rounded-md shadow-sm dark:bg-black dark:border-b ">
        <nav className="p-4 transition-all ">
          <div className="flex flex-wrap justify-between items-center mx-8 ">
            {/* LEFT SIDE */}
            <div className="flex justify-start items-center">
              {" "}
              <SideBarDrawer user={user} />{" "}
            </div>

            {/* RIGHT SIDE  */}

            <div className="flex items-center space-x-3 md:space-x-6">
              <button className="p-2 bg-blue-100 rounded-full text-blue-500">
                <PiBellRingingDuotone size={28} />
              </button>
              <Avatar>
                <AvatarImage src={user?.image as string} alt="de-mawo" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className=" text-slate-500 dark:text-slate-300">
                    <BiSolidChevronDown size={22} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>

                  <div className="flex flex-col items-center space-y-6 ">
                    <LogoutBtn />
                    <ToggleDarkLight />
                  </div>

                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
