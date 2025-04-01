import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

const useCommonResult = (baseUrl, handler) => {
    const params = useParams();
    const navigate = useNavigate();

    const {page, tag, query} = params;

    const {isLoading, isError, data} = useQuery({
        queryKey: ["commonResult", page, query],
        queryFn: () => handler(params)
    });

    const setNextPage = () => {
        if((+page + 1) <= +data.total_pages) navigate(`${baseUrl}/${+page + 1}`);
    };

    const setPrevPage = () => {
        if((+page - 1) <= +data.total_pages && (+page !== 1)) navigate(`${baseUrl}/${+page - 1}`);
    };

    return [isLoading, isError, data, page, tag, setNextPage, setPrevPage];
};

export default useCommonResult;