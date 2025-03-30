import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getIdSpecificInfo } from "../helper";

const useMainInfo = () => {
    const [data, setData] = useState(null);
    const {tag, mainId} = useParams();

    const fetchData = async () => {
        const info = await getIdSpecificInfo(tag, mainId);
        setData(info);
    };

    useEffect(() => {
        fetchData();

        return () => setData(null);
    }, [mainId]);

    return [data, tag];
};

export default useMainInfo;