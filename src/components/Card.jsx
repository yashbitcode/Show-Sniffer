import { getTruncatedStr } from "@/utils/helper";
import { BookmarkMinus, BookmarkPlus, CircleCheckBig, CircleUserRound, Dot, Film, TvMinimal } from "lucide-react";
import noImg from "../assets/no-img.png";
import { useNavigate } from "react-router";
import { TMDB_IMG_LINK } from "@/utils/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addBaseBM, addPeopleBM, deleteBaseBM, deletePeopleBM } from "@/utils/services/bookmarksSlice";

const Card = ({info, tag, type, maxWidth = ""}) => {
    const bm = useSelector((store) => (tag !== "person") ? store.bookmarks.baseBM : store.bookmarks.peopleBM);

    if(!info.media_type) info.media_type = tag;
    
    const {id, name, original_name, title, release_date, first_air_date, original_title, backdrop_path, media_type, profile_path} = info;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [bookmark, setBookmark] = useState(() => bm[id] ? true : false);

    tag = (media_type || tag);

    const handleCardNavigation = () => navigate(`/${tag}/${id}`);
    
    const handleBookmark = (e) => {
        e.stopPropagation();
        setBookmark(!bookmark);
        
        if(tag !== "person") {
            if(!bookmark) dispatch(addBaseBM(info));
            else dispatch(deleteBaseBM(id));
        }
        else {
            if(!bookmark) dispatch(addPeopleBM(info));
            else dispatch(deletePeopleBM(id));
        }

        toast.success("Bookmark", {
            description: `Bookmark ${!bookmark ? "Added" : "Removed"} Successfully`,
            icon: <CircleCheckBig size={20} />
        });
    };

    return (
        <div className={`relative cursor-pointer hover:scale-[1.02] transition-all duration-500 hover:rotate-[1deg] ease h-full w-full ${maxWidth}`} onClick={handleCardNavigation}>
            <div className={`w-full relative rounded-[8px] overflow-hidden bg-slate-300 ${(type === "major" && "opacity-70")}`}>
                <div className={"absolute z-10 top-[0.8rem] right-[0.8rem]"} onClick={handleBookmark}>
                    {
                        bookmark ? <BookmarkMinus color="white" size={35} /> : <BookmarkPlus color="white" size={35} />
                    }
                </div>
                <img className="object-cover z-[5]" src={backdrop_path ? (TMDB_IMG_LINK + backdrop_path) : (tag === "person" && profile_path) ? (TMDB_IMG_LINK + profile_path) : noImg} alt="backdrop" />
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
    );
};

export default Card;