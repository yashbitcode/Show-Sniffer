import { useParams } from "react-router";
import InfoAIShowCase from "./InfoAIShowCase";
import useAIData from "@/utils/hooks/useAIData";

const AISearchResult = () => {
    const { searchId } = useParams();
    const { isLoading, data } = useAIData();

    return isLoading ? <Skeleton className={"w-full h-[400px] mt-[1rem]"} /> : data && <InfoAIShowCase movies={data?.movies} tvSeries={data?.tv} />
        
};

export default AISearchResult;