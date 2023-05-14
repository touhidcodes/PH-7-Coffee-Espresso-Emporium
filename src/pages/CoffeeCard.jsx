import React from "react";

const CoffeeCard = ({ coffee }) => {
	const { name, chef, supplier, taste, category, details, url } = coffee;
	return (
		<div>
			<div className='card card-side bg-base-100 shadow-xl'>
				<figure>
					<img src={url} alt='Coffee' />
				</figure>
				<div className='card-body flex flex-row justify-between items-center '>
					<div>
						<h2 className='card-title'>{name}</h2>
						<p>{chef}</p>
						<p>{supplier}</p>
					</div>
					<div className='card-actions justify-end'>
						<div className='btn-group btn-group-vertical space-y-2'>
							<button className='btn btn-active'>View</button>
							<button className='btn'>Edit</button>
							<button className='btn'>Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
