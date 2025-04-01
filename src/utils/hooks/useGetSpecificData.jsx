import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../helper";

const useGetSpecificData = (category, tag) => {
    const fetchSpecificData = async () => {
        const data = await fetchData({category, tag});
        return data;
    };

    const {isLoading, isError, data} = useQuery({
        queryKey: ["specificData"],
        queryFn: fetchSpecificData
    });

    return [isLoading, isError, data];
};

export default useGetSpecificData;