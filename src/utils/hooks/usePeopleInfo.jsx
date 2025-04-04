import { useParams } from "react-router";
import { getPersonIdSpecificInfo } from "../helper";
import { useQuery } from "@tanstack/react-query";

const usePeopleInfo = () => {
    const {mainId} = useParams();

    const {isLoading, isError, data} = useQuery({
        queryKey: ["mainInfo" + mainId, mainId],
        queryFn: () => getPersonIdSpecificInfo(mainId),
        staleTime: 5 * 60 * 1000
    });

    return [isLoading, isError, data];
};

export default usePeopleInfo;