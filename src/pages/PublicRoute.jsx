import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
    const { isSignedIn, isLoaded } = useAuth();

    if(!isLoaded) return <Skeleton className={"w-full h-[500px] mt-[1.5rem]"} />;

    return !isSignedIn ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;