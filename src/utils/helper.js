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
};

export const getIdSpecificInfo = async (tag, id) => {
    tag = (tag === "tv series") ? "tv" : tag;

    const res1 = await fetch(`https://api.themoviedb.org/3/${tag}/${id}?api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);
    const res2 = await fetch(`https://api.themoviedb.org/3/${tag}/${id}/videos?api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);
    const res3 = await fetch(`https://api.themoviedb.org/3/${tag}/${id}/credits?api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);

    const mainData = await res1.json();
    const videos = await res2.json();
    const credits = await res3.json();

    return {mainData, videos, credits};
};

export const getPersonIdSpecificInfo = async (id) => {
    const res1 = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);

    const mainData = await res1.json();

    const res2 = await fetch(`https://api.themoviedb.org/3/find/${mainData.imdb_id}?external_source=imdb_id&api_key=5cc485ca4d1c04a1a9eb5393a66042b1`);

    const workedTitles = (await res2.json())?.person_results[0]?.known_for;

    return {mainData, workedTitles};
};

export const getTitleStr = (str) => {
    let res = "";

    str.map((el, idx) => { 
        res += el[0].toUpperCase() + el.substr(1);
        if(idx !== str.length) res += ' ';
    });

    return res;
};

export const getAllRecomm = async (movies, tvSeries) => {
    if(!movies && !tvSeries) return [];

    const res1 = await movies.map(async (el) => {
        const data = (await getSearchSuggestions({query: el, tag: "movie", page: 1})).results.slice(0, 2);

        return {
            key: el,
            data: data,
            tag: "movie"
        };
    });

    const res2 = await tvSeries.map(async (el) => {
        const data = (await getSearchSuggestions({query: el, tag: "tv", page: 1}))?.results?.slice(0, 2);

        return {
            key: el,
            data: data,
            tag: "tv series"
        };
    });

    const data = await Promise.all([...res1, ...res2]);
    return data;
};

export const getLanguage = (code) => {
    const lang = new Intl.DisplayNames(['en'], {type: 'language'});
    return lang.of(code);
};




// export const getTruncatedStr = (str) => {
//     if(str.length <= 20) return str;
//     return str.substr(0, 20) + "...";
// };

// export const fetchAndResolve = async (url) => {
//     const res = await fetch("/api/data", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({url: url})
//     });

//     const data = await res.json();

//     console.log(data);
//     return data;
// }

// export const fetchData = async ({category, tag, page}) => {
//     if(!page) page = 1;
//     if(tag === "tv series") tag = "tv";

//     const url = (category === "trending") ? `https://api.themoviedb.org/3/trending/${tag}/day?page=${page}&` : `https://api.themoviedb.org/3/${tag}/${category}?page=${page}&`;

//     const data = await fetchAndResolve(url);
//     return data;
// };

// export const getAllGenres = async (tag) => {
//     tag = (tag === "tv series") ? "tv" : tag;

//     const url = `https://api.themoviedb.org/3/genre/${tag}/list?`;

//     const data = await fetchAndResolve(url);
//     return data;
// };

// export const getGenreSpecificData = async ({tag, genreId, page}) => {
//     tag = (tag === "tv series") ? "tv" : tag;

//     const url = `https://api.themoviedb.org/3/discover/${tag}?page=${page}&with_genres=${genreId}&`;
    
//     const data = await fetchAndResolve(url);
//     return data;
// };

// export const getSearchSuggestions = async ({query, tag, page}) => {
//     tag = (tag === "tv series") ? "tv" : tag;

//     const url = `https://api.themoviedb.org/3/search/${tag}?query=${query}&page=${page}&`;

//     const data = await fetchAndResolve(url);  
//     return data;
// };

// export const getSearchResults = async ({query, page}) => {
//     const tv = await getSearchSuggestions({query, tag: "tv", page});
//     const movie = await getSearchSuggestions({query, tag: "movie", page});

//     return {tvRes: [...tv.results], movieRes: [...movie.results], total_results: tv.total_results + movie.total_results, total_pages: (tv.total_pages > movie.total_pages) ? tv.total_pages : movie.total_pages};
// };

// export const getIdSpecificInfo = async (tag, id) => {
//     tag = (tag === "tv series") ? "tv" : tag;

//     const mainData = await fetchAndResolve(`https://api.themoviedb.org/3/${tag}/${id}?`);
//     const videos = await fetchAndResolve(`https://api.themoviedb.org/3/${tag}/${id}/videos?`);
//     const credits = await fetchAndResolve(`https://api.themoviedb.org/3/${tag}/${id}/credits?`);

//     return {mainData, videos, credits};
// };

// export const getPersonIdSpecificInfo = async (id) => {
//     const mainData = await fetchAndResolve(`https://api.themoviedb.org/3/person/${id}?`);

//     const workedTitles = (await fetchAndResolve(`https://api.themoviedb.org/3/find/${mainData.imdb_id}?external_source=imdb_id&`))?.person_results[0]?.known_for;

//     return {mainData, workedTitles};
// };

// export const getTitleStr = (str) => {
//     let res = "";

//     str.map((el, idx) => { 
//         res += el[0].toUpperCase() + el.substr(1);
//         if(idx !== str.length) res += ' ';
//     });

//     return res;
// };

// export const getLanguage = (code) => {
//     const lang = new Intl.DisplayNames(['en'], {type: 'language'});
//     return lang.of(code);
// };
