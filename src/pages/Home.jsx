import SearchComp from "@/components/SearchComp";
import ShowCase from "@/components/ShowCase";
import { HOME_ALL_BASE } from "@/utils/constants";

const Home = () => {
    return (
        <div className="mt-[2.5rem] w-full mr-[1rem] pb-[1rem]">
            <SearchComp placeholder={"Movies Or TV Series"} tag={"multi"} />
            {
                HOME_ALL_BASE.map((el, idx) => <ShowCase key={idx} type={el.type} category={el.category} tag={el.tag} className={(el.type === "major") ? "mt-[1rem] max-sm:justify-items-center grid-rows- grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-sm1:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]" : "mt-[1rem] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid gap-x-[1rem] gap-y-[2rem] front-info max-sm:justify-items-center"} />)
            }
        </div>
    ); 
};

export default Home;