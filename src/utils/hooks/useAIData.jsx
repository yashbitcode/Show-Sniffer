import { useQuery } from "@tanstack/react-query";
import generateRes from "../services/gemini";

const useAIData = () => {
    // let { isLoading, data, refetch } = useQuery({
    //     queryKey: ["ai-search"],
    //     queryFn: () => generateRes(contextRef.current.value),
    //     staleTime: 60 * 1000 * 5,
    //     enabled: false
    // });
};

export default useAIData;