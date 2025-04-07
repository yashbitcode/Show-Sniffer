import databaseSer from "@/appwrite/databaseService";
import { useEffect, useState } from "react";

const useAIData = (searchId) => {
	const [context, setContext] = useState(null);
	const [recomm, setRecomm] = useState(null);

	const getRecomm = async () => {
		const { Context, Recommendations, Name } = await databaseSer.getSpecificSearchData(searchId);

		setContext(Context);
		setRecomm(JSON.parse(Recommendations));
	};

	useEffect(() => {
		getRecomm();
	}, []);

	return [context, recomm];
};

export default useAIData; 