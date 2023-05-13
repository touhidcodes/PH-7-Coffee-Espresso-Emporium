import React from "react";

const AddCoffee = () => {
	return (
		<div className='mx-auto w-2/4 mt-20'>
			<form className='bg-slate-200 p-5 rounded-xl'>
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
				<div className='flex justify-between mt-10'>
					<div className='form-control'>
						<label className='input-group'>
							<span>Photo URL</span>
							<input
								type='text'
								placeholder='photo url'
								className='input input-bordered'
								name='url'
							/>
						</label>
					</div>
				</div>
				<button className='btn btn-active btn-ghost mx-auto w-full mt-10 mb-3'>
					Add Coffee
				</button>
			</form>
		</div>
	);
};

export default AddCoffee;
