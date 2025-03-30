import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const useCommonResult = (baseUrl, handler) => {
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

    return [data, page, tag, setNextPage, setPrevPage];
};

export default useCommonResult;