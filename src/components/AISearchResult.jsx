import { useParams } from "react-router";
import InfoAIShowCase from "./InfoAIShowCase";
import useAIData from "@/utils/hooks/useAIData";
import { Skeleton } from "./ui/skeleton";

const AISearchResult = () => {
    const { searchId } = useParams();
    const [context, recomm] = useAIData(searchId);

    return (
        <div className="w-full mt-[1.8rem]">
            {
                context ? <h1 className="text-[2rem] max-sm1:text-[1.5rem] text-white text-center underline">{context}</h1> : <Skeleton className={"w-[350px] h-[50px] mx-auto"} />
            }

            {
                !recomm ? <Skeleton className={"w-full h-[400px] mt-[1rem]"} /> : <InfoAIShowCase movies={recomm?.movies} tvSeries={recomm?.tv} />
            }
        </div>
    )

        
};

export default AISearchResult;