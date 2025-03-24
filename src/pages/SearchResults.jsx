import CommonResultComp from "@/components/CommonResultComp";
import { getSearchResults, getSearchSuggestions } from "@/utils/helper";
import { useParams } from "react-router";

const SearchResults = () => {
    const {tag, query} = useParams();

    return <CommonResultComp baseUrl={`/${tag}/search/${query}`} handler={(tag !== "multi") ? getSearchSuggestions : getSearchResults} />;
};

export default SearchResults;