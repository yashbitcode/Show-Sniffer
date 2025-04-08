import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { contextValidation, fetchRecommendations } from "@/utils/helper";
import { useAuth } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";
import databaseSer from "@/appwrite/databaseService";
import { ID } from "appwrite";

const useRecommedationTemplate = () => {
    const nameRef = useRef(null);
    const contextRef = useRef(null);

    const queryClient = useQueryClient();
    const { userId } = useAuth();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        setLoading(true);
        setError(null);
        
        const name = nameRef.current.value;
        const context = contextRef.current.value;

        const errorMsg = contextValidation(name, context);

        setTimeout(() => {
            if(errorMsg) {
                setError(errorMsg);
                setLoading(false);
            }
            else setTimeout(async () => {
                const data = await queryClient.fetchQuery({
                    queryKey: ["recommendations"],
                    queryFn: () => fetchRecommendations(context),
                });

                const docId = ID.unique();

                await databaseSer.createSearch(userId, docId, name, JSON.stringify(data), context);

                setOpen(false);
                navigate("/ai-search/" + docId);
            }, 200);
        }, 500);
    };

    return [nameRef, contextRef, open, setOpen, error, setError, loading, handleSubmit];
};

export default useRecommedationTemplate;