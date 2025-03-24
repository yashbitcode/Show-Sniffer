import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getSearchSuggestions } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions, resetSuggestions } from "@/utils/services/suggestionsSlice";
import SearchDropDown from "./SearchDropDown";
import { useNavigate } from "react-router";

const SearchComp = ({placeholder, tag}) => {
    const [suggestions, setSuggestions] = useState(null);
    const [inp, setInp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sugg = useSelector((store) => store.searchSuggestions.suggestions);

    const fetchSuggestions = async () => {
        const data = await getSearchSuggestions({query: inp, tag: tag, page: 1});
        setSuggestions(data);

        dispatch(addSuggestions({searchQuery: inp, result: data}));
    };

    const handler = () => {
        if(!inp) setSuggestions(null);
        else {
            const catchedData = sugg[inp];

            if(catchedData) setSuggestions(catchedData);
            else fetchSuggestions();
        }
    };

    const submitSearch = () => {
        if(inp) navigate(`/${tag}/search/${inp}/1`)
    };

    useEffect(() => {
        dispatch(resetSuggestions());
    }, [tag]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            handler();
        }, 200);

        return () => clearTimeout(timerId);
    }, [inp]);

    return (
        <div className="flex max-sm:gap-[13px] gap-[20px] items-center max-w-[700px] mx-auto">
            <Search color="white" size={30} />

            <div className="w-full relative">
                <input type="text" value={inp} className="w-full caret-red-400 font-[300] outline-none bg-transparent text-white sm:text-[1.5rem] border-b-[1.5px]  search-inp" placeholder={"Search For " + placeholder} onChange={(e) => setInp(e.target.value)} onFocus={handler} onBlur={() => setTimeout(() => setSuggestions(null), 200)} />

                {
                    (suggestions && (suggestions.results.length !== 0)) && (
                        <div className="w-full rounded-[10px] bg-white absolute z-[10] mt-[0.5rem]">
                            <SearchDropDown suggestions={suggestions} />
                        </div>
                    )
                }
            </div>

            <Button className={"bg-slate-400 font-semibold hover:bg-slate-500 transition-all cursor-pointer"} onClick={submitSearch}>Submit</Button>
        </div>
    );
};

export default SearchComp;