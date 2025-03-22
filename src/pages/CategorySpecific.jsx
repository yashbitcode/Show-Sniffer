import CommonResultComp from "@/components/CommonResultComp";
import { fetchData } from "@/utils/helper";
import { useParams } from "react-router";

const CategorySpecific = () => {
    const {category, tag} = useParams();
    return <CommonResultComp baseUrl={`/${tag}/${category}`} handler={fetchData} />;
};

export default CategorySpecific;