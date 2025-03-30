import { useEffect, useState } from "react";
import { getSearchSuggestions } from "@/utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions, resetSuggestions } from "@/utils/services/suggestionsSlice";
import { useNavigate } from "react-router";

const useSearchDetails = (tag) => {
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
        if(inp) navigate(`/${tag}/search/${inp}/1`);
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

    return [suggestions, setSuggestions, inp, setInp, handler, submitSearch];
};

export default useSearchDetails;