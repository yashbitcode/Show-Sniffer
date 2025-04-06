import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import InfoAIShowCase from "@/components/InfoAIShowCase";
import useAIData from "@/utils/hooks/useAIdata";
import StarProject from "@/components/StarProject";

const AIRecommender = () => {
    const [inp, setInp, isLoading, data, handleSubmit] = useAIData();
    
    return (
        <div className="w-full mt-[1.5rem] min-sm3:pr-[1rem]">
            <div className="w-full flex gap-[1rem]">
                <div className="flex w-full max-sm:gap-[13px] gap-[20px] items-center max-w-[700px] mx-auto">
                    <Search color="white" size={30} />

                    <input type="text" value={inp} className="w-full caret-red-400 font-[300] outline-none bg-transparent text-white sm:text-[1.5rem] border-b-[1.5px]  search-inp" placeholder={"Eg: Best Movies"} onChange={(e) => setInp(e.target.value)} />

                    <Button className={"bg-slate-400 font-semibold hover:bg-slate-500 transition-all cursor-pointer"} onClick={handleSubmit}>Submit</Button>
                </div>

                <StarProject />
            </div>

            {
                isLoading ? <Skeleton className={"w-full h-[400px] mt-[1rem]"} /> : data && <InfoAIShowCase movies={data?.movies} tvSeries={data?.tv} />
            }
        </div>
    );
};

export default AIRecommender;