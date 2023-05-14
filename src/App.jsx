import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./pages/CoffeeCard";
import { useState } from "react";

function App() {
	const coffeeData = useLoaderData();
	const [coffees, setCoffees] = useState(coffeeData);
	return (
		<div>
			<h1 className='mt-5 text-5xl text-center'>Coffee Espresso Emporium</h1>
			<div className='grid grid-cols-2 gap-4 w-11/12 mx-auto mt-10'>
				{coffees.map((coffee) => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
