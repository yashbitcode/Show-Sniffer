import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

async function generateRes(userQuery) {
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
    
    return JSON.parse(response.text);
};

export default generateRes;