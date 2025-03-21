import Card from "@/components/Card";
import CategoryHeader from "@/components/CategoryHeader";
import SearchComp from "@/components/SearchComp";
import { fetchData } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Category = () => {
    const [data, setData] = useState(null);
    const {category, tag, page} = useParams();

    const fetchCategoryData = async () => {
        const fetchedData = await fetchData(category, tag, page);
        setData(fetchedData);
    }

    useEffect(() => {
        fetchCategoryData();
    }, []);

    if(!data) return;

    return (
        <div className="pr-[1rem] my-[2rem]">
            <SearchComp placeholder={"Movies"} />
            <div>
                <h1 className="text-[1.8rem] font-[300] text-white mt-[2rem]">Found {data.total_results.toLocaleString()} Results</h1>
                <div className="mt-[1rem] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem] max-[620px]:justify-items-center">
                    {
                        data.results.map((el) => <Card info={el} tag={tag} type={"minor"} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;