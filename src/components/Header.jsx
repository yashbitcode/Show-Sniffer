import { Film, House, TvMinimal, BookMarked, User, CircleUserRound, Logs, Popcorn, LogIn, BetweenHorizontalStart, BotMessageSquare, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import HeaderNavItem from "./HeaderNavItem";
import DropDownNavItem from "./DropDownNavItem";
import { useAuth, useClerk, UserButton } from "@clerk/clerk-react";
import { Skeleton } from "./ui/skeleton";
import { Link } from "react-router";

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
        {
            name: "AI Recommender",
            icon: BotMessageSquare,
            nav: "/ai-search"
        },
        {
            name: "Star On Github",
            icon: Star,
            nav: null
        },
    ];

    const baseOptions = [
        {
            name: "Sign In",
            icon: LogIn,
            nav: "/sign-in"
        },
        {
            name: "Sign Up",
            icon: BetweenHorizontalStart,
            nav: "/sign-up"
        },
    ];

    const {signOut} = useClerk();
    const {isSignedIn, isLoaded} = useAuth();

    if(!isLoaded) return <Skeleton className={"min-sm3:w-[80px] w-full mt-[1.5rem] min-sm3:h-[200px] h-[60px] min-sm3:ml-[1rem]"} />;

    return isSignedIn ? (
        <>
            <div className="min-sm3:h-[540px] max-sm3:hidden w-fit px-[15px] top-[1.5rem] py-[20px] bg-[#202946] mx-[0.7rem] flex flex-col items-center rounded-[10px] justify-between sticky my-[1rem]">
                <ul className="flex flex-col max-sm3:flex-row items-center h-full max-h-[430px] gap-[1.5rem] justify-between">
                    <li>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Popcorn size={50} strokeWidth={1.5} color="#F74840" />
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                    <p className="text-[0.9rem]">Snow Sniffer</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                    {
                        navOptions.map((el) => (el.nav) && <HeaderNavItem key={el.name} name={el.name} Icon={el.icon} nav={el.nav} />)
                    }
                </ul>

                <TooltipProvider className={"bg-white"}>
                    <Tooltip>
                        <TooltipTrigger>
                            <UserButton />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                            <p className="text-[0.9rem]">Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
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
                            <UserButton />
                            <span onClick={() => signOut()} className="text-[0.9rem] underline">Sign Out</span>
                        </DropdownMenuLabel>
                        
                        <DropdownMenuSeparator />

                        {
                            navOptions.map((el) => {
                                return el.nav !== null ? (
                                    <Link to={el.nav} key={el.name}>
                                        <DropDownNavItem name={el.name} Icon={el.icon} />
                                    </Link>
                                ) : (
                                    <div key={el.name}>
                                        <DropdownMenuSeparator />
                                        <a href="https://github.com/yashbitcode/Show-Sniffer">
                                            <DropDownNavItem name={el.name} Icon={el.icon} />
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    ) : (
        <>
            <div className="min-sm3:h-[250px] max-sm3:hidden w-fit px-[15px] top-[1.5rem] py-[20px] bg-[#202946] mx-[0.7rem] flex flex-col items-center rounded-[10px] justify-between sticky my-[1rem]">
                <ul className="flex flex-col max-sm3:flex-row items-center h-full max-h-[420px] gap-[1.5rem] justify-between">
                    <li>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Popcorn size={50} strokeWidth={1.5} color="#F74840" />
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                    <p className="text-[0.9rem]">Snow Sniffer</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
                    {
                        baseOptions.map((el) => <HeaderNavItem key={el.name} name={el.name} Icon={el.icon} nav={el.nav} />)
                    }
                </ul>
            </div>

            <div className="my-[1rem] flex w-full justify-between min-sm3:hidden">
                <div className="relative flex flex-col items-center">
                    <Popcorn size={45} strokeWidth={1.5} color="#F74840" />
                    <span className="text-[10px] text-[#F74840] absolute text-nowrap bottom-[-15px]">Show Sniffer</span>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Logs size={33} color="white" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={"mr-[1rem]"}>
                        {
                            baseOptions.map((el) => (
                                <Link to={el.nav} key={el.name}>
                                    <DropDownNavItem name={el.name} Icon={el.icon} />
                                </Link>
                            ))
                        }

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};

export default Header;