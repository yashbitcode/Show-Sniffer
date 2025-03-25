import SearchComp from "@/components/SearchComp";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import CardList from "./CardList";

const CommonResultComp = ({baseUrl, handler, className}) => {
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const {page, tag, query} = params;

    const fetchCategoryData = async () => {
        const fetchedData = await handler(params);
        setData(fetchedData);
    };

    const setNextPage = () => {
        if((+page + 1) <= +data.total_pages) navigate(`${baseUrl}/${+page + 1}`);
    };

    const setPrevPage = () => {
        if((+page - 1) <= +data.total_pages && (+page !== 1)) navigate(`${baseUrl}/${+page - 1}`);
    };

    useEffect(() => {
        setData(null);
        fetchCategoryData();
    }, [page, query]);

    if(!data) return;

    return (
        <div className="pr-[1rem] my-[2rem] w-full">
            <SearchComp placeholder={(tag === "movies") ? "Movies" : "TV Series"} tag={tag} />
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
        </div>
    );
};

export default CommonResultComp;