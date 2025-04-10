const handler = async (req, res) => {
    try {
        const {url} = req.body;
        const apiKey = process.env.API_KEY;
        
        const response = await fetch(url + "api_key=" + apiKey);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default handler;