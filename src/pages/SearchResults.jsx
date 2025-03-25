import CommonResultComp from "@/components/CommonResultComp";
import { getSearchResults, getSearchSuggestions } from "@/utils/helper";
import { useParams } from "react-router";

const SearchResults = () => {
    const {tag, query} = useParams();

    return <CommonResultComp baseUrl={`/${tag}/search/${query}`} handler={(tag !== "multi") ? getSearchSuggestions : getSearchResults} className={(tag !== "person") ? "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center" : "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]"} />;
};

export default SearchResults;