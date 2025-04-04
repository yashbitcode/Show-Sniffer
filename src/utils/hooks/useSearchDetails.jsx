import { useEffect, useRef, useState } from "react";
import { getSearchSuggestions } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions, resetSuggestions } from "@/utils/services/suggestionsSlice";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

const useSearchDetails = (tag) => {
    const [inp, setInp] = useState("");
    const [hideSugg, setHideSugg] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const timerRef = useRef(null);

    const sugg = useSelector((store) => store.searchSuggestions.suggestions);

    const fetchSuggestions = async () => {
        const catchedData = sugg[inp];

        if(catchedData) return catchedData;

        const data = await getSearchSuggestions({query: inp, tag: tag, page: 1});

        dispatch(addSuggestions({searchQuery: inp, result: data}));

        return data;
    };

    const submitSearch = () => {
        if(inp) navigate(`/${tag}/search/${inp}/1`);
    };

    useEffect(() => {
        dispatch(resetSuggestions());
    }, [tag]);

    const {data} = useQuery({
        queryKey: ["suggestions" + tag, inp],
        queryFn: () => new Promise((resolve) => {
            clearTimeout(timerRef.current);

            timerRef.current = setTimeout(async () => {
                const sugg = await fetchSuggestions();

                resolve(sugg);
            }, 200);
        }),
        staleTime: 5 * 60 * 1000
    });

    return [data, hideSugg, setHideSugg, inp, setInp, submitSearch];
};

export default useSearchDetails;