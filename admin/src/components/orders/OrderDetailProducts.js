import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = ({ order, loading }) => {
	if (!loading) {
		const addDecimals = (num) => {
			return Math.round((num * 100) / 100).toFixed(0);
		};

		order.itemsPrice = addDecimals(
			order.orderItems.reduce(
				(acc, item) => acc + item.price * item.qty,
				0
			)
		);
	}
	return (
		<table className='table border table-lg'>
			<thead>
				<tr>
					<th style={{ width: "40%" }}>Sản phẩm</th>
					<th style={{ width: "20%" }}>Giá</th>
					<th style={{ width: "20%" }}>Số lượng</th>
					<th style={{ width: "20%" }} className='text-end'>
						Tổng tiền
					</th>
				</tr>
			</thead>
			<tbody>
				{order.orderItems.map((item, index) => (
					<tr key={index}>
						<td>
							<Link className='itemside' to='#'>
								<div className='left'>
									<img
										src={item.image}
										alt={item.name}
										style={{
											width: "40px",
											height: "40px",
										}}
										className='img-xs'
									/>
								</div>
								<div className='info'>{item.name}</div>
							</Link>
						</td>
						<td>{new Intl.NumberFormat().format(item.price)}đ</td>
						<td>{item.qty}</td>
						<td className='text-end'>
							{new Intl.NumberFormat().format(
								item.qty * item.price
							)}
							đ
						</td>
					</tr>
				))}

				<tr>
					<td colSpan='4'>
						<article className='float-end'>
							<dl className='dlist'>
								<dt className='name-bold'>Thành tiền:</dt>{" "}
								<dd>
									{new Intl.NumberFormat().format(
										order.itemsPrice
									)}
									đ
								</dd>
							</dl>
							<dl className='dlist'>
								<dt>Phí vận chuyển:</dt>{" "}
								<dd>
									{new Intl.NumberFormat().format(
										order.shippingPrice
									)}
									đ
								</dd>
							</dl>
							<dl className='dlist'>
								<dt>Thuế:</dt>{" "}
								<dd>
									{new Intl.NumberFormat().format(
										order.taxPrice
									)}
									đ
								</dd>
							</dl>
							<dl className='dlist'>
								<dt>Tổng cộng:</dt>
								<dd>
									<b className='h5'>
										{new Intl.NumberFormat().format(
											order.totalPrice
										)}
										đ
									</b>
								</dd>
							</dl>
							<dl className='dlist'>
								<dt className='text-muted'>Trạng thái:</dt>
								<dd>
									{order.isPaid ? (
										<span className='badge rounded-pill alert alert-success text-success'>
											Đã thanh toán
										</span>
									) : (
										<span className='badge rounded-pill alert-danger text-danger'>
											Chưa thanh toán
										</span>
									)}
								</dd>
							</dl>
						</article>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default OrderDetailProducts;
