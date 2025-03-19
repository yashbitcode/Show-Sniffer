import MajorCard from "@/components/MajorCard";
import { Badge } from "@/components/ui/badge";

const MajorShowCase = ({title, badge}) => {
    return (
        <div className="mt-[2.5rem] w-full pb-[2rem]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[0.5rem]">
                    <h1 className="text-3xl text-white">{title}</h1>
                    <Badge className={"bg-white text-[12px] text-black relative top-[2px]"}>{badge}</Badge>
                </div>
                <Badge className={"outline-[1.4px] bg-transparent outline-amber-50 text-[12px] text-white relative top-[2px] cursor-pointer"}>LINK</Badge>
            </div>
            <div class="mt-[1rem] max-sm:justify-items-center grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-sm1:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] trending-info">
                <MajorCard />                        
                <MajorCard />                        
                <MajorCard />                        
                <MajorCard />                        
            </div>
        </div>
    );
};

export default MajorShowCase;