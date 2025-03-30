import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPersonIdSpecificInfo } from "../helper";

const usePeopleInfo = () => {
    const [data, setData] = useState(null);
    const {mainId} = useParams();

    const fetchData = async () => {
        const info = await getPersonIdSpecificInfo(mainId);
        setData(info);
    };

    useEffect(() => {
        fetchData();

        return () => setData(null);
    }, []);

    return data;
};

export default usePeopleInfo;