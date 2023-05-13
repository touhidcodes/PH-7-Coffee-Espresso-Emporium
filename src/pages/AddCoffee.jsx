import React from "react";

const AddCoffee = () => {
	return (
		<div>
			<form>
				<div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Coffee Name</span>
						</label>
						<label className='input-group'>
							<span>Name</span>
							<input
								type='text'
								placeholder='coffee name'
								className='input input-bordered'
							/>
						</label>
					</div>
				</div>
				<button className='btn btn-primary'>Button</button>
			</form>
		</div>
	);
};

export default AddCoffee;
