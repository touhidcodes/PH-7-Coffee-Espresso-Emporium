import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./pages/CoffeeCard";

function App() {
	const coffeeData = useLoaderData();

	return (
		<div>
			<h1 className='mt-5 text-5xl text-center'>Coffee Espresso Emporium</h1>
			<div className='grid grid-cols-2 gap-4 w-11/12 mx-auto mt-10'>
				{coffeeData.map((coffee) => (
					<CoffeeCard key={coffee._id} coffee={coffee} />
				))}
			</div>
		</div>
	);
}

export default App;
