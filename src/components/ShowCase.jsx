import useGetSpecificData from "@/utils/hooks/useGetSpecificData";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";

const ShowCase = ({category, tag, type, className}) => {
    const data = useGetSpecificData(category, tag);
    if(!data) return;

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