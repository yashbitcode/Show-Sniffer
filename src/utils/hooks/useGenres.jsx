import { useEffect, useState } from "react";
import { getAllGenres } from "@/utils/helper";
import { useParams } from "react-router";

const useGenres = () => {
    const [genres, setGenres] = useState(null);
    const {tag} = useParams();

    const fetchGenres = async () => {
        const data = await getAllGenres(tag);
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
    }, [tag]);

    return [genres, tag];
};

export default useGenres;