import { getGenreSpecificData } from "@/utils/helper";
import CommonResultComp from "@/components/CommonResultComp";
import { useParams } from "react-router";

const GenreSpecific = () => {
    const {tag, genreName, genreId} = useParams();

    return <CommonResultComp baseUrl={`/${tag}/genre/${genreName}/${genreId}`} handler={getGenreSpecificData} className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center"} />;
};

export default GenreSpecific;