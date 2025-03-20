import { getTitleStr } from "@/utils/helper";
import { Badge } from "@/components/ui/badge";

const CategoryHeader = ({category, tag}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-[0.7rem]">
                <h1 className="text-3xl text-white">{getTitleStr(category.split("_"))}</h1>
                <Badge className={`text-[11px] relative top-[2px] ${(tag !== "movie") ? "bg-white text-black" : "outline-[1.3px] outline-white text-white bg-transparent"}`}>{tag.toUpperCase()}</Badge>
            </div>
            <span className="text-[1rem] text-[#3e496a] relative top-[6px] cursor-pointer">SEE MORE</span>
        </div>
    );
};

export default CategoryHeader;