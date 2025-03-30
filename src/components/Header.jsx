import { Film, House, TvMinimal, BookMarked, User, CircleUserRound, Logs, Popcorn } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HeaderNavItem from "./HeaderNavItem";
import DropDownNavItem from "./DropDownNavItem";

const Header = () => {
    const navOptions = [
        {
            name: "Home",
            icon: House,
            nav: "/"
        },
        {
            name: "Movies",
            icon: Film,
            nav: "/movie/genre"
        },
        {
            name: "TV Series",
            icon: TvMinimal,
            nav: "/tv series/genre"
        },
        {
            name: "People",
            icon: CircleUserRound,
            nav: "/person"
        },
        {
            name: "Bookmarks",
            icon: BookMarked,
            nav: "/bookmarks"
        },
    ];

    return (
        <>
            <div className="min-sm3:h-[530px] max-sm3:hidden w-fit px-[15px] top-[1.5rem] py-[20px] bg-[#202946] mx-[0.7rem] flex flex-col items-center rounded-[10px] justify-between sticky my-[1rem]">
                <ul className="flex flex-col max-sm3:flex-row items-center h-full max-h-[420px] gap-[1.5rem] justify-between">
                    <li>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Popcorn size={45} strokeWidth={1.5} color="#F74840" />
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                    <p className="text-[0.9rem]">Snow Sniffer</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                    {
                        navOptions.map((el) => <HeaderNavItem key={el.name} name={el.name} Icon={el.icon} nav={el.nav} />)
                    }
                </ul>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                        <User size={25} strokeWidth={1.5} />
                    </AvatarFallback>
                </Avatar>
            </div>

            <div className="mt-[1rem] flex w-full justify-between min-sm3:hidden">
                <div className="relative flex flex-col items-center">
                    <Popcorn size={45} strokeWidth={1.5} color="#F74840" />
                    <span className="text-[10px] text-[#F74840] absolute text-nowrap bottom-[-15px]">Show Sniffer</span>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Logs size={33} color="white" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={"mr-[1rem]"}>
                        <DropdownMenuLabel className={"flex items-center gap-[10px] text-[1rem]"}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>
                                    <User size={25} strokeWidth={1.5} />
                                </AvatarFallback>
                            </Avatar>
                            <span>Yash Bit</span>
                        </DropdownMenuLabel>
                        
                        <DropdownMenuSeparator />

                        {
                            navOptions.map((el) => <DropDownNavItem key={el.name} name={el.name} Icon={el.icon} nav={el.nav} />)
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};

export default Header;