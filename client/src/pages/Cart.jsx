import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { addToCart, removefromcart } from "../redux/Actions/cartActions";

const Cart = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const qty = searchParams.get("qty") ? Number(searchParams.get("qty")) : 1;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(0);

	useEffect(() => {
		if (id) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, id, qty]);

	const checkOutHandler = () => {
		navigate("/login?redirect=shipping");
	};

	const removeFromCartHandle = (id) => {
		dispatch(removefromcart(id));
	};
	return (
		<section className='p-5 bg-body-secondary'>
			<div className='container'>
				{cartItems.length === 0 ? (
					<div className=' alert alert-light text-center mt-3 fs-5'>
						Giỏ hàng trống
					</div>
				) : (
					<div className='row w-100'>
						<div className='cart-details col-9'>
							{cartItems.map((item, index) => (
								<div
									key={index}
									className='cart-list product d-flex justify-content-between bg-white mt-4 p-4 position-relative rounded-2'
								>
									<div className='img'>
										<img
											className='w-100 h-100 object-fit-contain'
											src={item.image}
											alt=''
										/>
									</div>
									<div className='cart-details w-75 mt-2'>
										<h3 className='fs-5 mt-3'>
											{item.name}
										</h3>
										<h4 className='mt-5 fs-6'>
											{new Intl.NumberFormat().format(
												item.price
											)}
											đ * {item.qty}
											<span className='ms-3 text-danger'>
												{new Intl.NumberFormat().format(
													item.price * item.qty
												)}
												đ
											</span>
										</h4>
									</div>
									<div className='cart-items-function'>
										<div className='removeCart text-end me-2'>
											<button
												className='removeCart bg-transparent fs-4'
												onClick={() =>
													removeFromCartHandle(
														item.product
													)
												}
											>
												<i className='fa-solid fa-xmark'></i>
											</button>
										</div>
									</div>

									<div className='cart-item-price'></div>
								</div>
							))}
						</div>

						<div className='cart-total product col-3 bg-white mt-4 rounded-2 p-3 shadow text-end'>
							<h2 className='fs-5 text-danger border-bottom pb-3 mb-4 text-start'>
								Tổng thanh toán
							</h2>
							<div className='d-flex justify-content-between mb-3'>
								<h4 className='fs-6'>Thành tiền :</h4>
								<h3 className='fs-5 text-danger'>
									{new Intl.NumberFormat().format(total)}đ
								</h3>
							</div>
							<button
								className='btn btn-danger mt-3'
								onClick={checkOutHandler}
							>
								Thanh toán
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Cart;
