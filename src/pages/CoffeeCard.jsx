import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
	const { _id, name, chef, supplier, taste, category, details, url } = coffee;

	const handleDelete = (id) => {
		console.log(id);
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/coffee/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
						}

					});
			}
		});
	};
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
							<button
								className='btn bg-orange-400 border-none'
								onClick={() => {
									handleDelete(_id);
								}}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
