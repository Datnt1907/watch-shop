import React from "react";

const OrderDetailInfo = ({ order }) => {
	return (
		<div className='row mb-5 order-info-wrap'>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-user'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Khách hàng</h6>
						<p className='mb-1'>
							<span className='name-bold mb-2'>
								{order.user.name}
							</span>{" "}
							<br />
							<a href={`mailto:${order.user.email}`}>
								{order.user.email}
							</a>
						</p>
					</div>
				</article>
			</div>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-truck-moving'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Thông tin vận chuyển</h6>
						<p className='mb-1'>{order.paymentMethod}</p>
					</div>
				</article>
			</div>
			<div className='col-md-6 col-lg-4'>
				<article className='icontext align-items-start'>
					<span className='icon icon-sm rounded-circle alert-success'>
						<i className='text-success fas fa-map-marker-alt'></i>
					</span>
					<div className='text'>
						<h6 className='mb-1'>Vận chuyển đến</h6>
						<p className='mb-1'>
							<span className='mb-2'>SĐT:</span>{" "}
							{order.shippingAddress.phone} <br />
							<span className='mb-2'>Address:</span>{" "}
							{order.shippingAddress.address}
						</p>
					</div>
				</article>
			</div>
		</div>
	);
};

export default OrderDetailInfo;
