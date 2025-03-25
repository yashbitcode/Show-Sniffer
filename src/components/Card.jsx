import { getTruncatedStr } from "@/utils/helper";
import { CircleUserRound, Dot, Film, TvMinimal } from "lucide-react";
import noImg from "../assets/no-img.png";
import { Link } from "react-router";
import { TMDB_IMG_LINK } from "@/utils/constants";

const Card = ({info, tag, type}) => {
    const {id, name, original_name, title, release_date, first_air_date, original_title, backdrop_path, media_type, profile_path} = info;
    tag = (media_type || tag);

    return (
        <Link to={`/${tag}/${id}`}>
            <div className="relative cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:rotate-[1deg] ease h-full">
                <div className={`w-full rounded-[8px] overflow-hidden bg-white ${(type === "major" && "opacity-70")}`}>
                    <img className="object-cover" src={backdrop_path ? (TMDB_IMG_LINK + backdrop_path) : (tag === "person" && profile_path) ? (TMDB_IMG_LINK + profile_path) : noImg} alt="backdrop" />
                </div>

                <div className={(type === "major") ? "absolute z-[10] bottom-[10px] left-[10px]" : "mt-[1rem] flex flex-col gap-[7px]"}>
                    <div className="flex items-center">
                        {
                            (tag !== "person") && (
                                <>
                                    <span className="text-white">{(release_date || first_air_date || "_").split("-")[0]}</span>
                                    <Dot color="white" />
                                </>
                            )
                        }

                        {
                            (tag === "movie") ? <Film size={22} strokeWidth={1.5} color="white" className="mr-[5px]" /> : (tag === "person") ? <CircleUserRound size={22} strokeWidth={1.5} color="white" className="mr-[5px]" /> : <TvMinimal size={22} strokeWidth={1.5} color="white" className="mr-[5px]" />
                        }

                        <span className="text-white">{(tag !== "tv series") ? (tag[0].toUpperCase() + tag.substr(1)) : "TV Series"}</span>
                    </div>
                    <h1 className={`text-white ${(type === "major") ? "text-2xl" : "text-[1.1rem]"}`}>{getTruncatedStr(title || name || original_title || original_name)}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;