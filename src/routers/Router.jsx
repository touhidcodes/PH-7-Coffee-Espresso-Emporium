import { createBrowserRouter } from "react-router-dom";
import AddCoffee from "../pages/AddCoffee";
import App from "../App";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/addCoffee",
		element: <AddCoffee />,
	},
	{
		path: "/updateCoffee",
		element: <UpdateCoffee />,
	},
]);

export default router;
