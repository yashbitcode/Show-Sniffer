import SearchComp from "@/components/SearchComp";
import ShowCase from "@/components/ShowCase";
import { PERSON_ALL_BASE } from "@/utils/constants";

const Person = () => {
    return (
        <div className="mt-[2.5rem] w-full mr-[1rem] pb-[1rem]">
            <SearchComp placeholder={"People"} tag={"person"} />
            {
                PERSON_ALL_BASE.map((el, idx) => <ShowCase key={idx} type={el.type} category={el.category} tag={el.tag} className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]"} />)
            }
        </div>
    ); 
};

export default Person;