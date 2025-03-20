import useGetSpecificData from "@/utils/hooks/useGetSpecificData";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";

const ShowCase = ({category, tag, type}) => {
    const data = useGetSpecificData(category, tag);
    if(!data) return;

    return (
        <div className="mt-[2.5rem] w-full pb-[1.6rem]">
            <CategoryHeader category={category} tag={tag} />
            
            <div className={(type === "major") ? "mt-[1rem] max-sm:justify-items-center grid-rows- grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-sm1:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]" : "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid gap-x-[1rem] gap-y-[2rem] front-info max-sm:justify-items-center"}>
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