import StarProject from "@/components/StarProject";
import NewSearchPopUp from "@/components/NewSearchPopUp";
import useAISearches from "@/utils/hooks/useAISearches";
import { Skeleton } from "@/components/ui/skeleton";
import NotFound from "@/components/NotFound";
import SearchCards from "@/components/SearchCards";

const AIRecommender = () => {
    const allSearches = useAISearches();

    return (
        <div className="w-full mt-[1.5rem] min-sm3:pr-[1rem]">
            <div className="w-fit mx-auto">
                <StarProject />
            </div>
            <NewSearchPopUp />

            <div className="w-full flex flex-wrap justify-center gap-[1rem] mt-[1rem]">
                {
                    !allSearches ? <Skeleton className={"w-full h-[250px]"} /> : (
                        (allSearches.length === 0) ? <NotFound /> : <SearchCards allSearches={allSearches} />
                    )
                }
            </div>
        </div>
    );
};

export default AIRecommender;