import { useSelector } from "react-redux";
import Card from "./Card";

const PeopleBM = () => {
    const BM = useSelector((store) => store.bookmarks.peopleBM);
    
    return (
        <>
            <h1 className="text-[2.2rem] mt-[2rem] text-white">People</h1>
            <div className="mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]">
                {
                    Object.keys(BM).map((el) => <Card key={el} info={BM[el]} tag={"person"} type={"minor"} maxWidth={"max-w-[400px]"} />)
                }
            </div>
        </>
    );
};

export default PeopleBM;