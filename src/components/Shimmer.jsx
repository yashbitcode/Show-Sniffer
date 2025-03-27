import { Skeleton } from "@/components/ui/skeleton";

export const Shimmer = ({className, cardClass, totalCards = 10}) => {
    return (
        <div className="mt-[2rem] w-full mr-[1rem]">
            <Skeleton className={"w-[230px] h-[30px]"} />
            <div className={className}>
                {
                    Array.from({length: totalCards}, (_, idx) => (
                        <div className={cardClass} key={idx}>
                            <Skeleton className={"w-full h-full"} />    
                        </div>
                    ))
                }
            </div>
        </div>
    );
};