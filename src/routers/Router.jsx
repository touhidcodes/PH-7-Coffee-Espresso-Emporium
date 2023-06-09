import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../pages/AddCoffee";
import App from "../App";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: () => fetch("http://localhost:5000/coffee"),
	},

	{
		path: "/addCoffee",
		element: <AddCoffee />,
	},
	{
		path: "/updateCoffee/:id",
		element: <UpdateCoffee />,
		loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
	},
]);

export default router;
