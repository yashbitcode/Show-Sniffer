import MajorShowCase from "@/components/MajorShowCase";
import SearchComp from "@/components/SearchComp";

const Home = () => {
    return (
        <div className="mt-[1.5rem] w-full mr-[1rem] pb-[1rem]">
            <SearchComp placeholder={"Movies Or TV Series"} />
            <MajorShowCase title={"Trending"} badge={"Movie"} />
        </div>
    ); 
};

export default Home;