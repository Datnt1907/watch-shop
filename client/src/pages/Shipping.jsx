import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../redux/Actions/cartActions";
import { createOrder } from "../redux/Actions/OrderActions";
import { ORDER_CREATE_RESET } from "../redux/Constants/OrderConstants";
import { toast } from "react-toastify";

const Shipping = () => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const [name, setName] = useState(shippingAddress.name);
	const [phone, setPhone] = useState(shippingAddress.phone);
	const [email, setEmail] = useState(shippingAddress.mail);
	const [address, setAddress] = useState(shippingAddress.address);
	const [note, setNote] = useState(shippingAddress.note);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addDecimals = (num) => {
		return (Math.round(num * 100) / 100).toFixed(0);
	};

	cart.itemsPrice = addDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);
	cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
	cart.taxPrice = addDecimals(Number((0.08 * cart.itemsPrice).toFixed(0)));
	cart.totalPrice = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(0);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success } = orderCreate;

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ phone, address, note }));
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: "Thanh toán khi nhận hàng",
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			})
		);
		toast.success("Đặt hàng thành công");
		navigate("/");
	};

	useEffect(() => {
		if (success) {
			navigate(`/order/${order._id}`);
			dispatch({ type: ORDER_CREATE_RESET });
		}
	}, [navigate, dispatch, success, order]);
	return (
		<section className=' py-5 bg-body-secondary'>
			<div className='container'>
				<div className='row'>
					<div className='col-7'>
						<h3 className='mb-4'>Thông tin nhận hàng</h3>
						<form action=''>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Họ tên
								</label>
								<input
									id='name'
									type='text'
									className='form-control'
									placeholder='Họ tên'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									SĐT
								</label>
								<input
									id='name'
									type='text'
									className='form-control'
									placeholder='SĐT'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Email
								</label>
								<input
									id='name'
									type='email'
									className='form-control'
									placeholder='Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Địa chỉ
								</label>
								<input
									id='name'
									type='text'
									className='form-control'
									placeholder='Địa chỉ'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div className='mb-3'>
								<label htmlFor='name' className='form-label'>
									Ghi chú
								</label>
								<textarea
									id='name'
									type='text'
									className='form-control'
									rows={4}
									value={note}
									onChange={(e) => setNote(e.target.value)}
								/>
							</div>
						</form>
					</div>
					<div className='col-1'></div>
					<div className='col-4 mt-5'>
						<div className='d-flex align-items-end flex-column mt-5 subtotal-order bg-white p-4 rounded-2'>
							<table className='table table-bordered'>
								<tbody>
									<tr>
										<td>
											<strong>Thành tiền</strong>
										</td>
										<td>
											{new Intl.NumberFormat().format(
												cart.itemsPrice
											)}
											đ
										</td>
									</tr>
									<tr>
										<td>
											<strong>Phí vận chuyển</strong>
										</td>
										<td>
											{new Intl.NumberFormat().format(
												cart.shippingPrice
											)}
											đ
										</td>
									</tr>
									<tr>
										<td>
											<strong>Thuế</strong>
										</td>
										<td>
											{new Intl.NumberFormat().format(
												cart.taxPrice
											)}
											đ
										</td>
									</tr>
									<tr>
										<td>
											<strong>Tổng tiền</strong>
										</td>
										<td>
											{new Intl.NumberFormat().format(
												cart.totalPrice
											)}
											đ
										</td>
									</tr>
								</tbody>
							</table>

							<button
								type='submit'
								className='btn btn-danger mt-3'
								onClick={submitHandler}
							>
								Đặt hàng
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Shipping;
