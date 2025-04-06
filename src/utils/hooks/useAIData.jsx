
import { useState } from "react";
import generateRes from "@/utils/services/gemini";
import { useQuery } from "@tanstack/react-query";

const useAIData = () => {
    const [inp, setInp] = useState("");

    let {isLoading, data, refetch} = useQuery({
        queryKey: ["ai-search"],
        queryFn: () => generateRes(inp),
        staleTime: 60 * 1000 * 5,
        enabled: false
    });

    const handleSubmit = () => {
        if(inp) refetch();
    };

    return [inp, setInp, isLoading, data, handleSubmit];
};

export default useAIData;