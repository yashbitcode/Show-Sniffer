const handler = async (req, res) => {
    try {
        const api = process.env.API_KEY;
        console.log(api);
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=${api}`);
        const data = await response.json();
        console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

export default handler;