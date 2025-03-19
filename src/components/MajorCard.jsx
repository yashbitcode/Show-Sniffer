import { getTruncatedStr } from "@/utils/helper";
import { Dot, Film } from "lucide-react";

const MajorCard = () => {
    return (
        <div className="relative cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:rotate-[1deg] ease">
            <div className="w-full opacity-45 object-cover rounded-[8px] overflow-hidden">
                <img src="https://image.tmdb.org/t/p/original//AuSip6e3uvQgPnnFQjzdTrOVPx7.jpg" alt="" />
            </div>

            <div className="absolute z-[10] bottom-[10px] left-[10px]">
                <div className="flex items-center">
                    <span className="text-white">2025</span>
                    <Dot color="white" />
                    <Film size={22} strokeWidth={1.5} color="white" className="mr-[5px]" />
                    <span className="text-white">Movie</span>
                </div>
                <h1 className="text-white text-2xl">{getTruncatedStr("Batman Ninja vs. Yakuza League")}</h1>
            </div>
        </div>
    );
};

export default MajorCard;