import { getTitleStr } from "@/utils/helper";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

const CategoryHeader = ({category, tag}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[0.7rem]">
                <h1 className="text-white text-[1.8rem] max-sm1:text-[1.25rem]">{getTitleStr(category.split("_"))}</h1>
                <Badge className={`text-[11px] relative top-[2px] ${(tag !== "movie") ? "bg-white text-black" : "outline-[1.3px] outline-white text-white bg-transparent"}`}>{tag.toUpperCase()}</Badge>
            </div>
            <Link to={`/${tag}/${category}/1`}>
                <span className="text-[#5A6A90] uppercase text-[0.8rem] sm1:text-[0.9rem] relative sm1:top-[5px]">SEE MORE</span>
            </Link>
        </div>
    );
};

export default CategoryHeader;