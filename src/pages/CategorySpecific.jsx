import CommonResultComp from "@/components/CommonResultComp";
import { fetchData } from "@/utils/helper";
import { useParams } from "react-router";

const CategorySpecific = () => {
    const {category, tag} = useParams();

    return <CommonResultComp baseUrl={`/${tag}/${category}`} handler={fetchData} className={(tag !== "person") ? "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center" : "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] info-cont max-[620px]:justify-items-center info-cont"} />;
};

export default CategorySpecific;