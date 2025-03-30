import SearchComp from "@/components/SearchComp";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import CardList from "./CardList";
import { Shimmer } from "./Shimmer";
import useCommonResult from "@/utils/hooks/useCommonResult";

const CommonResultComp = ({baseUrl, handler, className}) => {
    const [data, page, tag, setNextPage, setPrevPage] = useCommonResult(baseUrl, handler);

    return (
        <div className="min-sm3:pr-[0.5rem] my-[2rem] w-full">
            <SearchComp placeholder={(tag === "movie") ? "Movies" : (tag === "person") ? "Person" : "TV Series"} tag={tag} />
            {
                (data) ? (
                    <div>
                        <h1 className="text-[1.8rem] font-[300] text-white mt-[2rem]">Found {data.total_results.toLocaleString()} Results</h1>
                        <div className={className}>
                            {
                                (tag !== "multi") ? <CardList dataArr={data.results} tag={tag} /> : (
                                    <>
                                        <CardList dataArr={data.tvRes} tag={"tv"} />
                                        <CardList dataArr={data.movieRes} tag={"movie"} />
                                    </>
                                )
                            }
                        </div>

                        <Pagination className={"text-white mt-[2rem] border-1 w-fit py-[12px] px-[8px] rounded-[7px]"}>
                            <PaginationContent className={"flex gap-[1rem]"}>
                                <PaginationItem className={"cursor-pointer"}>
                                    <PaginationPrevious className={"text-xl"} onClick={setPrevPage} />
                                </PaginationItem>
                            
                                {
                                    (+page !== 1) && (
                                        <span className="text-xl">{page - 1}</span>
                                    )
                                }
                                <span className="text-xl bg-slate-600 px-[10px] py-[2px] rounded-[5px]">{page}</span>

                                {
                                    ((+page + 1) <= data.total_pages) && (
                                        <span className="text-xl">{+page + 1}</span>
                                    )
                                }

                                {
                                    !(+page >= data.total_pages) && (
                                        <PaginationItem>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    )
                                }
                                
                                <PaginationItem className={"cursor-pointer"}>
                                    <PaginationNext className={"text-xl"} onClick={setNextPage} />
                                </PaginationItem>
                                
                            </PaginationContent>
                        </Pagination>
                    </div>
                ) : (
                    (tag !== "person") ? <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid gap-[1rem] max-sm:justify-items-center"} cardClass={"w-full h-[200px] max-sm3:h-[180px]"} /> : <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]"} cardClass={"w-full h-[400px] max-sm3:h-[200px] mx-auto"} />
                )
            }
        </div>
    );
};

export default CommonResultComp;