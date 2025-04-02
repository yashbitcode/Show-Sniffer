import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDropDown from "./SearchDropDown";
import useSearchDetails from "@/utils/hooks/useSearchDetails";

const SearchComp = ({placeholder, tag}) => {
    const [data, hideSugg, setHideSugg, inp, setInp, submitSearch] = useSearchDetails(tag);
    
    return (
        <div className="flex max-sm:gap-[13px] gap-[20px] items-center max-w-[700px] mx-auto">
            <Search color="white" size={30} />

            <div className="w-full relative">
                <input type="text" value={inp} className="w-full caret-red-400 font-[300] outline-none bg-transparent text-white sm:text-[1.5rem] border-b-[1.5px]  search-inp" placeholder={"Search For " + placeholder} onChange={(e) => setInp(e.target.value)} onFocus={() => setHideSugg(false)} onBlur={() => setTimeout(() => setHideSugg(true), 400)} />

                {
                    (!hideSugg && data && (data.results.length !== 0)) && (
                        <div className="w-full rounded-[10px] bg-white absolute z-[10] mt-[0.5rem]">
                            <SearchDropDown suggestions={data} tag={(tag !== "multi" ? tag : null)} />
                        </div>
                    )
                }
            </div>

            <Button className={"bg-slate-400 font-semibold hover:bg-slate-500 transition-all cursor-pointer"} onClick={submitSearch}>Submit</Button>
        </div>
    );
};

export default SearchComp;