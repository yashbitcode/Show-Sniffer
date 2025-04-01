import { useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addBaseBM, addPeopleBM, deleteBaseBM, deletePeopleBM } from "@/utils/services/bookmarksSlice";
import { CircleCheckBig } from "lucide-react";

const useCardData = (info, tag) => {
    const bm = useSelector((store) => (tag !== "person") ? store.bookmarks.baseBM : store.bookmarks.peopleBM);

    if(!info.media_type) info.media_type = tag;
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [bookmark, setBookmark] = useState(() => bm[info.id] ? true : false);

    tag = (info.media_type || tag);

    const handleCardNavigation = () => navigate(`/${tag}/${info.id}`);
    
    const handleBookmark = (e) => {
        e.stopPropagation();
        setBookmark(!bookmark);
        
        if(tag !== "person") {
            if(!bookmark) dispatch(addBaseBM(info));
            else dispatch(deleteBaseBM(info.id));
        }
        else {
            if(!bookmark) dispatch(addPeopleBM(info));
            else dispatch(deletePeopleBM(info.id));
        }

        toast.success("Bookmark", {
            description: `Bookmark ${!bookmark ? "Added" : "Removed"} Successfully`,
            icon: <CircleCheckBig size={20} />
        });
    };

    return [bookmark, handleCardNavigation, handleBookmark];
};

export default useCardData;