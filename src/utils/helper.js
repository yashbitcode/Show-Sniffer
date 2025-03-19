export const getTruncatedStr = (str) => {
    if(str.length <= 30) return str;
    return str.substr(0, 30) + "...";
};