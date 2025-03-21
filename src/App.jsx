import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import Category from "./pages/Category";
import AllGenres from "./components/AllGenres";

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
				path: "/:category/:tag/:page",
				element: <Category />
			},
			{
				path: "/genre/:tag",
				element: <AllGenres />
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