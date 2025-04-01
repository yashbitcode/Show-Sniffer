import NotFound from "@/components/NotFound";
import SearchComp from "@/components/SearchComp";
import Star from "@/components/Star";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TMDB_IMG_LINK } from "@/utils/constants";
import { getLanguage, getTitleStr } from "@/utils/helper";
import useMainInfo from "@/utils/hooks/useMainInfo";
import { Link as LinkLucide } from "lucide-react";
import { Link } from "react-router";

const MainDataInfo = () => {
    const [isLoading, isError, data, tag] = useMainInfo();    
    
    if(isLoading) return <Skeleton className={"w-full h-[500px] mr-[1rem] mt-[1.5rem]"} />;
    if(isError) return <NotFound />;

    const {poster_path, genres, homepage, original_title, title, original_name, name, vote_average, overview, popularity, release_date, production_companies, status, tagline, first_air_date, last_air_date, original_language, runtime} = data.mainData;

    return (
        <div className="my-[2rem] min-sm3:pr-[1rem]">
            <SearchComp placeholder={(tag === "movie") ? "Movies" : "TV Series"} tag={tag} />
            <div className="mt-[2.5rem] relative grid max-lg1:grid-cols-1 grid-cols-[400px_auto] gap-[2.6rem] w-full">
                <div className="w-full max-lg1:mx-auto max-lg1:max-w-[500px] overflow-hidden">
                    <img className="rounded-[15px] w-full" src={TMDB_IMG_LINK + poster_path} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[1.1rem]">
                    <div>
                        <h1 className="text-[3rem] font-light leading-[55px]">{title || name || original_name || original_title}</h1>
                        <p className="text-gray-400 font-light text-[1.1rem]">{tagline}</p>
                    </div>

                    <div className="flex gap-[10px] items-center">
                        <h1 className="text-[2.4rem] font-semibold">{(5 * ((+vote_average * 10) / 100)).toFixed(1)}</h1>
                        {

                            Array.from({length: 5}, (_, idx) => {
                                let starWidth = ((5 * ((+vote_average * 10) / 100)).toFixed(1) * 100) - (idx  * 100);

                                return (
                                    <Star key={idx} width={starWidth >= 100 ? 100 : (starWidth <= 0) ? 0 : starWidth} />
                                );
                            }) 
                        }
                    </div>

                    <div className="flex flex-wrap gap-x-[2.7rem] gap-y-[1.3rem] w-full">
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Language</h2>
                            <p>{getLanguage(original_language)}</p>
                        </div>
                        {
                            (tag === "movie") ? (
                                <>
                                    <div>
                                        <h2 className="text-gray-400 text-[1.2rem]">Length</h2>
                                        <p>{runtime} Mins</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gray-400 text-[1.2rem]">Year</h2>
                                        <p>{release_date.split("-")[0]}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h2 className="text-gray-400 text-[1.2rem]">First-Air</h2>
                                        <p>{first_air_date}</p>
                                    </div>
                                    <div>
                                        <h2 className="text-gray-400 text-[1.2rem]">Last-Air</h2>
                                        <p>{last_air_date}</p>
                                    </div>
                                </>
                            )
                        }
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Status</h2>
                            <p>{status || "N/A"}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Popularity</h2>
                            <p>{popularity.toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Genres</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5em]">
                            {
                                genres.map((el) => (
                                    <Link key={el.id} to={`/${tag}/genre/${el.name}/${el.id}/1`}>
                                        <Badge className={"text-[16px] text-black bg-white"}>{getTitleStr(el.name.split(" "))}</Badge>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Trailers/Teasers</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5em]">
                            {
                                data.videos.results.map((el) => {
                                    if(el.type === "Trailer") return (
                                        <a href={`https://www.youtube.com/watch?v=${el.key}`} key={el.id}>
                                            <Badge className={"text-black bg-white"}>
                                                <LinkLucide />
                                            </Badge>
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Synopsis</h2>
                        <p className="mt-[0.5rem] font-light">{overview}</p>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Casts</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5rem]">
                            {
                                data.credits.cast.map((el) => (
                                    <Link key={el.id} to={`/person/${el.id}`}>
                                        <Badge className={"text-[16px] outline-[1.5px] outline-white text-white bg-transparent"}>{getTitleStr(el.name.split(" "))}</Badge>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Production Companies</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5rem]">
                            {
                                production_companies.map((el) => <Badge key={el.id} className={"text-[16px] outline-[1.5px] outline-white text-white bg-transparent"}>{getTitleStr(el.name.split(" "))}</Badge>)
                            }
                        </div>
                    </div>

                    <a href={homepage} className="mt-[1rem] flex items-center gap-[0.8rem] bg-[#202946] p-[10px] w-fit rounded-[10px]">
                        <span className="text-[1.1rem]">Website</span>
                        <LinkLucide />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainDataInfo;