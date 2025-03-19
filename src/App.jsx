import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Outlet } from "react-router";

const AppLayout = () => {
	return (
		<div className="bg-[#0F141E] h-[200vh] flex gap-[1rem]">
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
			}
		]
	}
]);

const App = () => {
	return (
		<RouterProvider router={appRoutes} />	
	);
};

export default App;