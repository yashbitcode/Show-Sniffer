import useGetSpecificData from "@/utils/hooks/useGetSpecificData";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";
import { Shimmer } from "./Shimmer";

const ShowCase = ({category, tag, type, className}) => {
    const data = useGetSpecificData(category, tag);
    if(!data) return (tag !== "person") ? (
        <>
            <Shimmer className={"mt-[1rem] max-sm:justify-items-center grid-rows- grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-sm1:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-[1.1rem]"} cardClass={"w-full h-[320px] max-sm3:h-[270px]"} totalCards={4} />

            <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid gap-[1rem] front-info max-sm:justify-items-center"} cardClass={"w-full h-[200px] max-sm3:h-[180px]"} totalCards={4} />
        </>
    ) : (
        <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]"} cardClass={"w-full h-[400px] max-sm3:h-[200px] mx-auto"} totalCards={4} />
    );

    return (
        <div className="mt-[2.5rem] w-full pb-[1.6rem]">
            <CategoryHeader category={category} tag={tag} />
            
            <div className={className}>
                {
                    (() => {
                        const cardsArr = [];

                        for(let i = 1; i <= (type === "major" ? 4 : 6); i++) {
                            cardsArr.push(<Card key={data.results[i].id} info={data.results[i]} tag={tag} type={type} />);
                        }

                        return cardsArr;
                    })()
                }                    
            </div>
        </div>
    );
};

export default ShowCase;