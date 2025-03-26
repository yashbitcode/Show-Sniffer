import { Skeleton } from "@/components/ui/skeleton";

export const Shimmer = ({className, cardClass, totalCards = 10}) => {
    return (
        <div className="mt-[2rem] w-full mr-[1rem]">
            <Skeleton className={"w-[230px] h-[30px]"} />
            <div className={className}>
                {
                    (() => {
                        const arr = [];

                        for(let i = 1; i <= totalCards; i++) {
                            arr.push(
                                <div className={cardClass} key={i}>
                                    <Skeleton className={"w-full h-full"} />    
                                </div>
                            );
                        }

                        return arr;
                    })()
                }
            </div>
        </div>
    )
};