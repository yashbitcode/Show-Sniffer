import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    const auth = useAuth();
	
	const { isSignedIn, isLoaded } = auth;

	if (!isLoaded) return <Skeleton className={"w-full h-[500px] mt-[1.5rem]"} />;

	return isSignedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;