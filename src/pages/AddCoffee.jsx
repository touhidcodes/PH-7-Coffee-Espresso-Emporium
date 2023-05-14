import React from "react";

const AddCoffee = () => {
	const handleFormSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const chef = form.chef.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const url = form.url.value;

		const newCoffee = { name, chef, supplier, taste, category, details, url };

		// send data to the server
		fetch("http://localhost:5000/coffee", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert("Coffee Added Successfully");
				}
			});
	};
	return (
		<div className='mx-auto w-2/4 mt-20'>
			<form className='bg-slate-200 p-5 rounded-xl' onSubmit={handleFormSubmit}>
				<h2 className='text-3xl text-center '>Add Coffee</h2>
				<div className='flex justify-between mt-10'>
					<div className='form-control'>
						<label className='input-group'>
							<span>Coffee Name</span>
							<input
								type='text'
								placeholder='coffee name'
								className='input input-bordered'
								name='name'
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='input-group'>
							<span>Chef</span>
							<input
								type='text'
								placeholder='chef name'
								className='input input-bordered'
								name='chef'
							/>
						</label>
					</div>
				</div>
				<div className='flex justify-between mt-10'>
					<div className='form-control'>
						<label className='input-group'>
							<span>Supplier</span>
							<input
								type='text'
								placeholder='supplier name'
								className='input input-bordered'
								name='supplier'
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='input-group'>
							<span>Taste</span>
							<input
								type='text'
								placeholder='taste'
								className='input input-bordered'
								name='taste'
							/>
						</label>
					</div>
				</div>
				<div className='flex justify-between mt-10'>
					<div className='form-control'>
						<label className='input-group'>
							<span>Category</span>
							<input
								type='text'
								placeholder='category'
								className='input input-bordered'
								name='category'
							/>
						</label>
					</div>
					<div className='form-control'>
						<label className='input-group'>
							<span>Details</span>
							<input
								type='text'
								placeholder='details'
								className='input input-bordered'
								name='details'
							/>
						</label>
					</div>
				</div>
				<div className=' mt-10'>
					<div className='form-control'>
						<label className='input-group'>
							<span>Photo URL</span>
							<input
								type='text'
								placeholder='photo url'
								className='input input-bordered w-full'
								name='url'
							/>
						</label>
					</div>
				</div>
				<input
					type='submit'
					value='Add Coffee'
					className='btn btn-active btn-ghost mx-auto w-full mt-10 mb-3'
				/>
			</form>
		</div>
	);
};

export default AddCoffee;
