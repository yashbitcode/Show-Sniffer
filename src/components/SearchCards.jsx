import { Link } from "react-router";

const SearchCards = ({allSearches}) => {
    return allSearches.map((el) => (
        <Link key={el.$id} to={"/ai-search/" + el.$id}>
            <div className="rounded-[5px] bg-[#202946] text-3xl text-white py-[8px] px-[1rem]">{el.Name}</div>
        </Link>
    ));
};

export default SearchCards;