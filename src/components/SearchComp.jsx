import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchComp = ({placeholder}) => {
    return (
        <div className="flex max-sm:gap-[13px] gap-[20px] items-center">
            <Search color="white" size={30} />
            <input type="text" className="w-full caret-red-400 font-[300] outline-none bg-transparent text-white sm:text-[1.5rem] border-b-[1.5px]  search-inp" placeholder={"Search For " + placeholder} />
            <Button className={"bg-slate-400 font-semibold hover:bg-slate-500 transition-all cursor-pointer"}>Submit</Button>
        </div>
    );
};

export default SearchComp;