import React from "react";

const Contact = () => {
	return (
		<div className='container my-5'>
			<div className='row justify-content-center'>
				<div className='col-md-6'>
					<h2 className='text-center mb-4'>Liên hệ với chúng tôi</h2>
					<form action='#' method='POST'>
						<div className='form-group'>
							<label className='mb-2 mt-4' for='name'>
								Họ và tên:
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								required
							/>
						</div>
						<div className='form-group'>
							<label className='mb-2 mt-4' for='email'>
								Email:
							</label>
							<input
								type='email'
								className='form-control'
								id='email'
								name='email'
								required
							/>
						</div>
						<div className='form-group'>
							<label className='mb-2 mt-4' for='subject'>
								Chủ đề:
							</label>
							<input
								type='text'
								className='form-control'
								id='subject'
								name='subject'
								required
							/>
						</div>
						<div className='form-group'>
							<label className='mb-2 mt-4' for='message'>
								Nội dung:
							</label>
							<textarea
								className='form-control'
								id='message'
								name='message'
								rows='5'
								required
							></textarea>
						</div>
						<button
							type='submit'
							className='btn btn-danger btn-block mt-4 w-100 p-2'
						>
							Gửi
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
