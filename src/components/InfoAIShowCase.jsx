import { useQuery } from "@tanstack/react-query";
import NotFound from "./NotFound";
import { getSearchSuggestions } from "@/utils/helper";

const InfoAIShowCase = ({movies, tvSeries}) => {
    const {isLoading, isError, data} = useQuery({
        queryKey: ["ai-recom.", movies, tvSeries],
        queryFn: getAllRecomm
    });

    console.log(data);

    if(!movies?.length && !tvSeries?.length) return <NotFound />;

    return (
        <div></div>
    );
};

export default InfoAIShowCase;