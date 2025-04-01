import { useParams } from "react-router";
import { getIdSpecificInfo } from "../helper";
import { useQuery } from "@tanstack/react-query";

const useMainInfo = () => {
    const {tag, mainId} = useParams();

    const {isLoading, isError, data} = useQuery({
        queryKey: ["mainInfo", mainId],
        queryFn: () => getIdSpecificInfo(tag, mainId)
    });

    return [isLoading, isError, data, tag];
};

export default useMainInfo;