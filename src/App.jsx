import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import AllGenres from "./pages/AllGenres";
import GenreSpecific from "./pages/GenreSpecific";
import CategorySpecific from "./pages/CategorySpecific";

const AppLayout = () => {
	return (
		<div className="bg-[#0F141E] flex gap-[0.8rem] w-full h-full min-h-[100vh]">
			<Header />
			<Outlet />
		</div>
	);
};

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
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
				path: "/:tag/genre/:genreName/:genreId/:page",
				element: <GenreSpecific />
			},
		]
	}
]);

const App = () => {
	return (
		<RouterProvider router={appRoutes} />	
	);
};

export default App;