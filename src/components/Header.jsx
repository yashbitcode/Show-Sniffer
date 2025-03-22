import { Film, House, Clapperboard, TvMinimal, SquareUserRound, BookMarked, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Link } from "react-router";

const Header = () => {
    return (
        <div className="h-[550px] w-fit px-[15px] top-[1.5rem] py-[20px] bg-[#202946] mx-[0.7rem] flex flex-col items-center rounded-[10px] justify-between sticky">
            <ul className="flex flex-col items-center h-full max-h-[420px] gap-[1.5rem] justify-between">
                <li>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Clapperboard size={45} strokeWidth={1.5} color="#F74840" />
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
                <li>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <SquareUserRound size={30} strokeWidth={2} color="white" className="cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                                <p className="text-[0.9rem]">People</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
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
    );
};

export default Header;