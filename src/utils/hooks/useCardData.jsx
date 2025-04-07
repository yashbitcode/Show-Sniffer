import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addBaseBM, addPeopleBM, deleteBaseBM, deletePeopleBM } from "@/utils/services/bookmarksSlice";
import { CircleCheckBig } from "lucide-react";
import databaseSer from "@/appwrite/databaseService";
import { useAuth } from "@clerk/clerk-react";
import { ID } from "appwrite";

const useCardData = (info, tag) => {
    const {userId} = useAuth();

    const bm = useSelector((store) => (tag !== "person") ? store.bookmarks.baseBM : store.bookmarks.peopleBM);

    if(!info.media_type) info.media_type = tag;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [bookmark, setBookmark] = useState(() => bm[info.id] ? true : false);

    tag = (info.media_type || tag);

    useEffect(() => {
        if(bm[info.id]) setBookmark(true);
    }, [bm]);

    const handleCardNavigation = () => navigate(`/${tag}/${info.id}`);
    
    const handleBookmark = (e) => {
        e.stopPropagation();
        setBookmark(!bookmark);

        const docId = ID.unique();
        
        if(tag !== "person") {
            if(!bookmark) dispatch(addBaseBM({info, docId}));
            else dispatch(deleteBaseBM(info.id));
        }

        else {
            if(!bookmark) dispatch(addPeopleBM({info, docId}));
            else dispatch(deletePeopleBM(info.id));
        }

        if(!bookmark) {
            databaseSer.createBookmark(userId, docId, JSON.stringify({id: info.id, info: info, docId: docId}));
        }
        else databaseSer.deleteBookmark(bm[info.id].docId);

        toast.success("Bookmark", {
            description: `Bookmark ${!bookmark ? "Added" : "Removed"} Successfully`,
            icon: <CircleCheckBig size={20} />
        });
    };

    return [bookmark, handleCardNavigation, handleBookmark];
};

export default useCardData;