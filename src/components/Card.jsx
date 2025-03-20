import { getTruncatedStr } from "@/utils/helper";
import { Dot, Film, TvMinimal } from "lucide-react";
import noImg from "../assets/no-img.png";

const Card = ({info, tag, type}) => {
    const {id, name, original_name, release_date, first_air_date, original_title, backdrop_path} = info;

    return (
        <div className="relative cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:rotate-[1deg] ease h-full">
            <div className="w-full object-cover rounded-[8px] overflow-hidden bg-white">
                {/* {
                    backdrop_path ? <img src={backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : "null"} alt="" /> : <ImageOff />
                } */}
                <img src={backdrop_path ? `https://image.tmdb.org/t/p/original${backdrop_path}` : noImg} alt="" />

            </div>

            <div className={(type === "major") ? "absolute z-[10] bottom-[10px] left-[10px]" : "mt-[1rem] flex flex-col gap-[7px]"}>
                <div className="flex items-center">
                    <span className="text-white">{(release_date || first_air_date).split("-")[0]}</span>
                    <Dot color="white" />

                    {
                        (tag === "movie") ? <Film size={22} strokeWidth={1.5} color="white" className="mr-[5px]" /> : <TvMinimal size={22} strokeWidth={1.5} color="white" className="mr-[5px]" />
                    }

                    <span className="text-white">{(tag === "movie") ? "Movie" : "TV Series"}</span>
                </div>
                <h1 className={`text-white ${(type === "major") ? "text-2xl" : "text-[1.1rem]"}`}>{getTruncatedStr(name || original_title || original_name)}</h1>
            </div>
        </div>
    );
};

export default Card;