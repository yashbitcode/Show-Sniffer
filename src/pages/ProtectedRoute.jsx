import databaseSer from "@/appwrite/databaseService";
import { Skeleton } from "@/components/ui/skeleton";
import { setBMState } from "@/utils/services/bookmarksSlice";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const { isSignedIn, isLoaded, userId } = useAuth();
	const dispatch = useDispatch();

	const getBM = async () => {
		const [baseBM, peopleBM] = await databaseSer.getAllBookmarks(userId);
		dispatch(setBMState([baseBM, peopleBM]));
	};
	
	useEffect(() => {
		if(userId) getBM();
	}, [userId]);

	if (!isLoaded) return <Skeleton className={"w-full h-[500px] mt-[1.5rem]"} />;

	return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;