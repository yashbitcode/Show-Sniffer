import { useSelector } from "react-redux";
import Card from "./Card";

const MoviesAndTvBM = () => {
    const BM = useSelector((store) => store.bookmarks.baseBM);
    const dataArr = Object.keys(BM);
    
    return dataArr.length !== 0 && (
        <>
            <h1 className="text-[2.2rem] mt-[2rem] text-white">Movies & TV Series</h1>
            <div className="mt-[1rem] w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center">
                {
                    dataArr.map((el) => <Card key={el} info={BM[el]} tag={el.media_type} type={"minor"} maxWidth="max-w-[500px]" />)
                }
            </div>
        </>
    );
};

export default MoviesAndTvBM;