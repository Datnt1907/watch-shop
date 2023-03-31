import React from "react";

const SaleStatistics = () => {
	return (
		<div className='col-xl-6 col-lg-12'>
			<div className='card mb-4 shadow-sm'>
				<article className='card-body'>
					<h5 className='card-title'>Thống kê bán hàng</h5>
					<img
						style={{
							width: "100%",
							height: "350px",
							objectFit: "contain",
						}}
						src='/images/static.png'
						alt=''
					/>
				</article>
			</div>
		</div>
	);
};

export default SaleStatistics;
