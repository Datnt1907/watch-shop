import React from "react";

const Wrapper = () => {
	const data = [
		{
			image: <i className='fa-solid fa-truck-fast'></i>,
			title: "Miễn phí giao hàng",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			image: <i className='fa-solid fa-id-card'></i>,
			title: "Thanh toán bảo mật",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			image: <i className='fa-solid fa-shield'></i>,
			title: "Tự tin mua sắm",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
		{
			image: <i className='fa-solid fa-headset'></i>,
			title: "Hỗ trợ 24/7",
			decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam.",
		},
	];
	return (
		<>
			<section className='bg-secondary-subtle py-5'>
				<div className='container '>
					<div className='row gx-3'>
						{data.map((val, index) => {
							return (
								<div className=' col-3' key={index}>
									<div className='bg-white p-5 rounded-2 shadow m-2 text-center'>
										<div className='icon-circle m-auto mb-4'>
											<i>{val.image}</i>
										</div>
										<h3 className='fs-5 fw-semibold'>
											{val.title}
										</h3>
										<p>{val.decs}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Wrapper;
