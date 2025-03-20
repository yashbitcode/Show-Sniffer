export const getTruncatedStr = (str) => {
    if(str.length <= 20) return str;
    return str.substr(0, 20) + "...";
};

export const fetchData = async (category, tag, page = 1) => {
    const url = (category === "trending") ? `https://api.themoviedb.org/3/trending/${tag === "movie" ? tag : "tv"}/day?page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1` : `https://api.themoviedb.org/3/${tag === "movie" ? tag : "tv"}/${category}?page=${page}&api_key=5cc485ca4d1c04a1a9eb5393a66042b1`;

    const res = await fetch(url);
    const data = await res.json();
    
    return data;
};

export const getTitleStr = (str) => {
    let res = "";

    str.map((el, idx) => { 
        res += el[0].toUpperCase() + el.substr(1);
        if(idx !== str.length) res += ' ';
    });

    return res;
}