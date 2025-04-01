import { useParams } from "react-router";
import { getPersonIdSpecificInfo } from "../helper";
import { useQuery } from "@tanstack/react-query";

const usePeopleInfo = () => {
    const {mainId} = useParams();

    const {isLoading, isError, data} = useQuery({
        queryKey: ["mainInfo", mainId],
        queryFn: () => getPersonIdSpecificInfo(mainId)
    });

    return [isLoading, isError, data];
};

export default usePeopleInfo;