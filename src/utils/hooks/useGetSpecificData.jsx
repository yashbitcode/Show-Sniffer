import { useEffect, useState } from "react";
import { fetchData } from "../helper";

const useGetSpecificData = (category, tag) => {
    const [data, setData] = useState(null);
    const fetchSpecificData = async () => {
        const data = await fetchData(category, tag);
        setData(data);
    };

    useEffect(() => {
        fetchSpecificData();
    }, []);

    return data;
};

export default useGetSpecificData;