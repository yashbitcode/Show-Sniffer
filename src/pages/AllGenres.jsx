import { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import { getAllGenres } from "@/utils/helper";
import Genre from "../components/Genre";
import { useParams } from "react-router";

const AllGenres = () => {
    const [genres, setGenres] = useState(null);
    const {tag} = useParams();

    const fetchGenres = async () => {
        const data = await getAllGenres(tag);
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
    }, [tag])

    if(!genres) return;

    return (
        <div className="my-[2rem] mr-[1rem] w-full">
            <SearchComp placeholder={(tag === "movie" ? "Movies" : "TV Series")} tag={tag} />
            <div className={`flex flex-wrap mt-[2rem] gap-[1rem] ${tag === "movie" ? "[&>*:nth-child(odd)]:bg-[#0E7490] [&>*:nth-child(even)]:bg-[#171E31]" : "[&>*:nth-child(odd)]:bg-[#378a7f] [&>*:nth-child(even)]:bg-[#12182a]"}`} >
                {
                    genres.map((el) => <Genre key={el.id} tag={tag} name={el.name} id={el.id} />)
                }
            </div>
        </div>
    );
};

export default AllGenres;