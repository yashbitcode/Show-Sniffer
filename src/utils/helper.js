export const getTruncatedStr = (str) => {
    if(str.length <= 20) return str;
    return str.substr(0, 20) + "...";
};

export const fetchData = async ({category, tag, page}) => {
    if(!page) page = 1;
    if(tag === "tv series") tag = "tv";

    const url = (category === "trending") ? `https://api.themoviedb.org/3/trending/${tag}/day?page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1` : `https://api.themoviedb.org/3/${tag}/${category}?page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1`;

    const res = await fetch(url);
    const data = await res.json();
    
    return data;
};

export const getAllGenres = async (tag) => {
    tag = (tag === "tv series") ? "tv" : tag;

    const res = await fetch(`https://api.themoviedb.org/3/genre/${tag}/list?api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);
    const data = await res.json();

    return data;
};

export const getGenreSpecificData = async ({tag, genreId, page}) => {
    tag = (tag === "tv series") ? "tv" : tag;

    const res = await fetch(`https://api.themoviedb.org/3/discover/${tag}?page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1&with_genres=${genreId}`);
    const data = await res.json();

    return data;
};

export const getSearchSuggestions = async ({query, tag, page}) => {
    tag = (tag === "tv series") ? "tv" : tag;

    const res = await fetch(`https://api.themoviedb.org/3/search/${tag}?query=${query}&page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);
    const data = await res.json();

    return data;
};

export const getSearchResults = async ({query, page}) => {
    const tv = await getSearchSuggestions({query, tag: "tv", page});
    const movie = await getSearchSuggestions({query, tag: "movie", page});

    return {tvRes: [...tv.results], movieRes: [...movie.results], total_results: tv.total_results + movie.total_results, total_pages: (tv.total_pages > movie.total_pages) ? tv.total_pages : movie.total_pages};
}

export const getTitleStr = (str) => {
    let res = "";

    str.map((el, idx) => { 
        res += el[0].toUpperCase() + el.substr(1);
        if(idx !== str.length) res += ' ';
    });

    return res;
};