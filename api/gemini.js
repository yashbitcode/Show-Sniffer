import { GoogleGenAI, Type } from "@google/genai";

const generateRes = async (req, res) => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_KEY });
        const { userQuery } = req.body;

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `
                Based on the following user query, suggest up to 5 movies and up to 5 TV series.
    
                If the query is unrelated to movies or TV series, unclear, or out of context, return:
                {
                    "tv": [],
                    "movies": []
                }
    
                If the query is valid, return a JSON object in the following format:
                {
                    "tv": ["TV series name 1", "TV series name 2", ...],
                    "movies": ["Movie name 1", "Movie name 2", ...]
                }
    
                Only include names of popular or relevant titles. No descriptions or additional text. Only return the JSON object and if user ask more movies give movies only and if tv series give tv only.
    
                User query: "${userQuery}"        
            `,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        tv: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                                nullable: true
                            }
                        },
                        movies: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                                nullable: true
                            }
                        }
                    },
                    required: ["tv", "movies"]
                }
            }
        });

        const data = JSON.parse(response.text);
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default generateRes;