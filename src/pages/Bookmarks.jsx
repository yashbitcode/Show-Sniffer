import MoviesAndTvBM from "@/components/MoviesAndTvBM";
import PeopleBM from "@/components/PeopleBM";
import { Separator } from "@radix-ui/react-dropdown-menu";

const Bookmarks = () => {
    return (
        <div className="w-full mb-[2rem]">
            <MoviesAndTvBM />
            <Separator className="my-[1.8rem] bg-amber-100 py-[2px] rounded-2xl" />
            <PeopleBM />
        </div>
    );
};

export default Bookmarks;