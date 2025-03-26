import { Film, House, TvMinimal, BookMarked, User, CircleUserRound, Logs, Popcorn } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Link } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
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
                    <Link to={"/"}>
                        <li>
                            <TooltipProvider className={"bg-amber-200"}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <House size={30} strokeWidth={2} color="white" className="cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                        <p className="text-[0.9rem]">Home</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </Link>

                    <Link to={"/movie/genre"}>
                        <li>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Film size={30} strokeWidth={2} color="white" className="cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                        <p className="text-[0.9rem]">Movies</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </Link>

                    <Link to={"/tv series/genre"}>
                        <li>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <TvMinimal size={30} strokeWidth={2} color="white" className="cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                        <p className="text-[0.9rem]">TV Series</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </Link>

                    <Link to={"/person"}>
                        <li>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <CircleUserRound size={30} strokeWidth={2} color="white" className="cursor-pointer" />
                                    </TooltipTrigger>
                                    <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                        <p className="text-[0.9rem]">People</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </Link>
                    <li>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <BookMarked size={45} strokeWidth={1.5} color="#F74840" className="cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                    <p className="text-[0.9rem]">Bookmarks</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>
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
                            <Link to={"/"}>
                                <DropdownMenuLabel className={"flex items-center gap-[10px] text-[1rem]"}>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>
                                            <User size={25} strokeWidth={1.5} />
                                        </AvatarFallback>
                                    </Avatar>
                                    <span>Yash Bit</span>
                                </DropdownMenuLabel>
                            </Link>
                        <DropdownMenuSeparator />

                        <Link to={"/"}>
                            <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                                <House size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                                <span>Home</span>
                            </DropdownMenuItem>
                        </Link>

                        <Link to={"/movie/genre"}>
                            <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                                <Film size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                                <span>Movies</span>
                            </DropdownMenuItem>
                        </Link>

                        <Link to={"/tv series/genre"}>
                            <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                                <TvMinimal size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                                <span>TV Series</span>
                            </DropdownMenuItem>
                        </Link>

                        <Link to={"/person"}>
                            <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                                <CircleUserRound size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                                <span>People</span>
                            </DropdownMenuItem>
                        </Link>

                        <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                            <BookMarked size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                            <span>Bookmarks</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
};

export default Header;