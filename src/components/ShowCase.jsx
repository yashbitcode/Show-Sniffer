import useGetSpecificData from "@/utils/hooks/useGetSpecificData";
import CategoryHeader from "./CategoryHeader";
import Card from "./Card";
import GetRequiredShimmer from "./GetRequiredShimmer";

const ShowCase = ({category, tag, type, className}) => {
    const data = useGetSpecificData(category, tag);

    if(!data) return <GetRequiredShimmer tag={tag} />;

    return (
        <div className="mt-[2.5rem] w-full pb-[1.6rem]">
            <CategoryHeader category={category} tag={tag} />
            
            <div className={className}>
                {
                    Array.from({length: (type === "major" ? 4 : 6)}, (_, idx) => (
                        <Card key={data.results[idx].id} info={data.results[idx]} tag={tag} type={type} />
                    ))
                }                    
            </div>
        </div>
    );
};

export default ShowCase;