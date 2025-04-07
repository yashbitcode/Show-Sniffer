import StarProject from "@/components/StarProject";
import NewSearchPopUp from "@/components/NewSearchPopUp";

const AIRecommender = () => {    
    return (
        <div className="w-full mt-[1.5rem] min-sm3:pr-[1rem]">
            <div className="w-fit mx-auto">
                <StarProject />
            </div>

            <NewSearchPopUp />
        </div>
    );
};

export default AIRecommender;