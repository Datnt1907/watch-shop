import React from "react";

const TopTotal = ({ orders, products }) => {
	let totalSale = 0;
	if (orders) {
		orders.map((order) =>
			order.isPaid === true
				? (totalSale = totalSale + order.totalPrice)
				: null
		);
	}
	return (
		<div className='row'>
			<div className='col-lg-4'>
				<div className='card card-body mb-4 shadow-sm'>
					<article className='icontext'>
						<span className='icon icon-sm rounded-circle alert-primary'>
							<i className='text-primary fas fa-usd-circle'></i>
						</span>
						<div className='text'>
							<h6 className='mb-1'>Doanh thu</h6>
							<span>
								{new Intl.NumberFormat().format(
									totalSale.toFixed(0)
								)}
								đ
							</span>
						</div>
					</article>
				</div>
			</div>
			<div className='col-lg-4'>
				<div className='card card-body mb-4 shadow-sm'>
					<article className='icontext'>
						<span className='icon icon-sm rounded-circle alert-success'>
							<i className='text-success fas fa-bags-shopping'></i>
						</span>
						<div className='text'>
							<h6 className='mb-1'>Tổng số đơn</h6>
							{orders ? (
								<span>{orders.length}</span>
							) : (
								<span>0</span>
							)}
						</div>
					</article>
				</div>
			</div>
			<div className='col-lg-4'>
				<div className='card card-body mb-4 shadow-sm'>
					<article className='icontext'>
						<span className='icon icon-sm rounded-circle alert-warning'>
							<i className='text-warning fas fa-shopping-basket'></i>
						</span>
						<div className='text'>
							<h6 className='mb-1'>Tổng sản phẩm</h6>
							{products ? (
								<span>{products.length}</span>
							) : (
								<span>0</span>
							)}
						</div>
					</article>
				</div>
			</div>
		</div>
	);
};

export default TopTotal;