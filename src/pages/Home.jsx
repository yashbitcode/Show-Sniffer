import SearchComp from "@/components/SearchComp";
import ShowCase from "@/components/ShowCase";
import { HOME_ALL_BASE } from "@/utils/constants";

const Home = () => {
    return (
        <div className="mt-[2.5rem] w-full mr-[1rem] pb-[1rem]">
            <SearchComp placeholder={"Movies Or TV Series"} tag={"multi"} />
            {
                HOME_ALL_BASE.map((el, idx) => <ShowCase key={idx} type={el.type} category={el.category} tag={el.tag} />)
            }
        </div>
    ); 
};

export default Home;