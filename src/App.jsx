import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import AllGenres from "./pages/AllGenres";
import GenreSpecific from "./pages/GenreSpecific";
import CategorySpecific from "./pages/CategorySpecific";
import { Provider } from "react-redux";
import appStore from "./utils/services/appStore";
import SearchResults from "./pages/SearchResults";
import MainDataInfo from "./pages/MainDataInfo";
import Person from "./pages/Person";
import PersonMainInfo from "./pages/PersonMainInfo";
import { Toaster } from "@/components/ui/sonner"
import Bookmarks from "./pages/Bookmarks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { SignedOut } from "@clerk/clerk-react";
import ProtectedRoute from "./pages/ProtectedRoute";
import PublicRoute from "./pages/PublicRoute";
import AIRecommender from "./pages/AIRecommender";
import AISearchResult from "./components/AISearchResult";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const AppLayout = () => {
	return (
		<Provider store={appStore}>
			<div className="bg-[#0F141E] flex gap-[0.8rem] w-full h-full min-h-[100vh] max-sm3:flex-col max-sm3:px-[1rem]">
				<Header />
				<Outlet />
				<Toaster />
			</div>
		</Provider>
	);
};

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <PublicRoute />,
				children: [
					{
						path: "/",
						element: <HomePage />
					},
					{
						path: "/sign-in/*",
						element: <SignInPage />
					},
					{
						path: "/sign-up/*",
						element: <SignUpPage />
					}
				]
			},
			{
				path: "/",
				element: <ProtectedRoute />,
				children: [
					{
						path: "/home",
						element: <Home />
					},
					{
						path: "/:tag/:category/:page",
						element: <CategorySpecific />
					},
					{
						path: "/:tag/genre",
						element: <AllGenres />
					},
					{
						path: "/:tag",
						element: <Person />
					},
					{
						path: "/person/:mainId",
						element: <PersonMainInfo />
					},
					{
						path: "/:tag/genre/:genreName/:genreId/:page",
						element: <GenreSpecific />
					},
					{
						path: "/:tag/search/:query/:page",
						element: <SearchResults />
					},
					{
						path: "/:tag/:mainId",
						element: <MainDataInfo />
					},
					{
						path: "/bookmarks",
						element: <Bookmarks />
					},
					{
						path: "/ai-search",
						element: <AIRecommender />
					},
					{
						path: "/ai-search/:searchId",
						element: <AISearchResult />
					}
				]
			}
		]
	}
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={appRoutes} />
		</QueryClientProvider>
	);
};

export default App;