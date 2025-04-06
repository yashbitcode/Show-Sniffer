import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Star } from "lucide-react";

const StarProject = () => {
    return (
        <div className="max-sm3:hidden">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <div className="bg-white px-[0.5rem] py-[7px] flex gap-[7px] rounded-[5px] items-center">
                            <Star className="text-2xl" size={20} />
                            <a href="https://github.com/yashbitcode/Show-Sniffer" className="text-[1.1rem] max-[700px]:text-[0.9rem] text-nowrap">Star On Github</a>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-[#F74840] text-white text-[0.9rem]">
                        <p className="text-[0.9rem]">Star The Project</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default StarProject;