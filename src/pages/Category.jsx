import Card from "@/components/Card";
import SearchComp from "@/components/SearchComp";
import { fetchData } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Category = () => {
    const [data, setData] = useState(null);
    const {category, tag, page} = useParams();
    const navigate = useNavigate();

    const fetchCategoryData = async () => {
        const fetchedData = await fetchData(category, tag, page);
        setData(fetchedData);
    };

    const setNextPage = () => {
        if((+page + 1) <= +data.total_pages) navigate(`/${category}/${tag}/${+page + 1}`);
    };

    const setPrevPage = () => {
        if((+page - 1) <= +data.total_pages && (+page !== 1)) navigate(`/${category}/${tag}/${+page - 1}`);
    };

    useEffect(() => {
        setData(null);
        fetchCategoryData();
    }, [page]);

    if(!data) return;

    return (
        <div className="pr-[1rem] my-[2rem]">
            <SearchComp placeholder={"Movies"} />
            <div>
                <h1 className="text-[1.8rem] font-[300] text-white mt-[2rem]">Found {data.total_results.toLocaleString()} Results</h1>
                <div className="mt-[1rem] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center">
                    {
                        data.results.map((el) => <Card key={el.id} info={el} tag={tag} type={"minor"} />)
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
                                <span className="text-2xl">...</span>
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

export default Category;