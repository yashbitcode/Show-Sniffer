import { getAllGenres } from "@/utils/helper";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
    const {tag} = useParams();

    const genres = useQuery({
        queryKey: ["genresList" + tag, tag], 
        queryFn: () => getAllGenres(tag), 
        staleTime: 5 * 60 * 1000
    });

    return [genres, tag];
};

export default useGenres;