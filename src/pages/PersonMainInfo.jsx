import { TMDB_IMG_LINK } from "@/utils/constants";
import { getPersonIdSpecificInfo, getTitleStr } from "@/utils/helper";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import noImg from "../assets/no-img.png";
import { Badge } from "../components/ui/badge";
import SearchComp from "../components/SearchComp";

const PersonMainInfo = () => {
    const [data, setData] = useState(null);
    const {mainId} = useParams();

    const fetchData = async () => {
        const info = await getPersonIdSpecificInfo(mainId);
        console.log(info);
        setData(info);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(!data) return;

    const {profile_path, name, gender, place_of_birth, popularity, deathday, biography, known_for_department, birthday} = data.mainData;

    return (
        <div className="my-[2rem] pr-[1rem]">
            <SearchComp placeholder={"Person"} tag={"person"} />
            <div className="mt-[2rem] max-lg1:grid-cols-1 grid grid-cols-[400px_auto] gap-[2.6rem]">
                <div className="w-full max-lg1:mx-auto max-lg1:max-w-[500px] overflow-hidden">
                    <img className="rounded-[15px] w-full" src={(profile_path ? (TMDB_IMG_LINK + profile_path) : noImg)} alt="profile" />
                </div>

                <div className="text-white flex flex-col gap-[1.1rem]">
                    <h1 className="text-[3rem] font-light leading-[55px]">{name}</h1>

                    <div className="flex flex-wrap gap-x-[2.7rem] gap-y-[1.3rem] w-full">
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Gender</h2>
                            <p>{(gender === 1) ? "Female" : "Male"}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Birth Place</h2>
                            <p>{place_of_birth || "-"}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Birthday</h2>
                            <p>{birthday || "-"}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Deathday</h2>
                            <p>{deathday || "-"}</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 text-[1.2rem]">Popularity</h2>
                            <p>{popularity}</p>
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Known Department</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5em]">
                            <Badge className={"text-[16px] text-black bg-white"}>{getTitleStr(known_for_department.split(" "))}</Badge>
                        </div>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Biography</h2>
                        <p className="mt-[0.5rem] font-light">{biography}</p>
                    </div>

                    <div className="mt-[0.5rem]">
                        <h2 className="text-[1.2rem]">Worked Titles</h2>
                        <div className="flex gap-[10px] flex-wrap mt-[0.5rem]">
                            {
                                data.workedTitles?.map((el) => (
                                    <Link to={`/${el.media_type}/${el.id}`} key={el.id}>
                                        <Badge className={"text-[16px] text-black bg-white"}>{getTitleStr((el.title || el.original_title).split(" "))}</Badge>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonMainInfo;