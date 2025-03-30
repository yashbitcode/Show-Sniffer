import useGenres from "@/utils/hooks/useGenres";
import Genre from "../components/Genre";
import SearchComp from "../components/SearchComp";

const AllGenres = () => {
    const [genres, tag] = useGenres();

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