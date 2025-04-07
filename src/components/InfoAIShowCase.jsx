import { useQuery } from "@tanstack/react-query";
import NotFound from "./NotFound";
import { getAllRecomm } from "@/utils/helper";
import Card from "./Card";

const InfoAIShowCase = ({movies, tvSeries}) => {
    const {isError, data} = useQuery({
        queryKey: ["ai-recom.", movies, tvSeries],
        queryFn: () => getAllRecomm(movies, tvSeries),
        staleTime: 60 * 1000 * 5
    });

    if(!movies?.length && !tvSeries?.length) return <NotFound />;

    if(isError) return <NotFound />;

    return (
        <div className="w-full flex flex-col gap-[3rem] my-[1.5rem] min-sm3:pr-[1rem]">
            {
                data?.map((el1) => (
                    <div key={el1.key}>
                        <h1 className="text-3xl text-white mb-[10px]">{el1.key}</h1>

                        <div className="mt-[1rem] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] info-cont max-[620px]:justify-items-center info-cont">
                            {
                                el1.data.map((el2) => (
                                    <Card key={el2.id} info={el2} tag={el1.tag} type={"minor"} maxWidth="max-w-[550px]" />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default InfoAIShowCase;