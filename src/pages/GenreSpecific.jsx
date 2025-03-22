import { getGenreSpecificData } from "@/utils/helper";
import CommonResultComp from "@/components/CommonResultComp";
import { useParams } from "react-router";

const GenreSpecific = () => {
    const {tag, genreName, genreId} = useParams();

    return <CommonResultComp baseUrl={`/${tag}/genre/${genreName}/${genreId}`} handler={getGenreSpecificData} />;
}

export default GenreSpecific;