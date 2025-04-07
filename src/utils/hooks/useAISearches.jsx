import databaseSer from "@/appwrite/databaseService";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useAISearches = () => {
    const [searches, setSearches] = useState(null);
    const { userId } = useAuth();

    const getAllSearches = async () => {
        const data = await databaseSer.getAllSearches(userId);
        setSearches(data.documents);
    };

    useEffect(() => {
        getAllSearches();
    }, []);

    return searches;
};

export default useAISearches;