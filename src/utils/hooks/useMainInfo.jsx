import { useParams } from "react-router";
import { getIdSpecificInfo } from "../helper";
import { useQuery } from "@tanstack/react-query";

const useMainInfo = () => {
    const {tag, mainId} = useParams();

    const {isLoading, isError, data} = useQuery({
        queryKey: ["mainInfo" + tag + mainId, mainId],
        queryFn: () => getIdSpecificInfo(tag, mainId),
        staleTime: 5 * 60 * 1000
    });

    return [isLoading, isError, data, tag];
};

export default useMainInfo;