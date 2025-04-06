import { Link } from "react-router";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const HeaderNavItem = ({name, Icon, nav}) => {
    return (
        <Link to={nav}>
            <li>
                <TooltipProvider className={"bg-amber-200"}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Icon size={28} strokeWidth={2} color="white" className="cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent side="right" className="bg-[#F74840] text-white text-[0.9rem]">
                            <p className="text-[0.9rem]">{name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
        </Link>
    );
};

export default HeaderNavItem;