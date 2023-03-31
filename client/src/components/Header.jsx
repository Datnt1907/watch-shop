import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../redux/Actions/userActions";

const Header = () => {
	const [show, setShow] = useState(false);
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<>
			<section className='search py-3  position-sticky'>
				<div className='container d-flex align-items-center justify-content-between'>
					<div className='logo'>
						<Link to='/' className='fs-4 fw-bold'>
							Atomic Shop
						</Link>
					</div>

					<div className='search-box d-flex align-items-center border border-2 rounded-5'>
						<i className='fa fa-search opacity-50 p-3 fs-5'></i>
						<input
							className='w-100 p-2 rounded-5'
							type='text'
							placeholder='Tìm kiếm sản phẩm'
						/>
					</div>

					<div className='icon d-flex align-items-center position-relative'>
						<div
							className=''
							onMouseEnter={() => setShow(true)}
							onMouseLeave={() => setShow(false)}
						>
							<i
								className='fa fa-user icon-circle'
								role='button'
							></i>
							{show && (
								<div className=''>
									{userInfo ? (
										<Link
											className='position-absolute user-action'
											to='#'
											onClick={logoutHandler}
										>
											Đăng xuất
										</Link>
									) : (
										<div className='d-flex flex-column position-absolute auth'>
											<Link to='/register'>Đăng ký</Link>
											<Link to='/login'>Đăng nhập</Link>
										</div>
									)}
								</div>
							)}
						</div>

						<div className='cart'>
							<Link to='/cart' className='position-relative'>
								<i className='fa fa-shopping-bag icon-circle'></i>
								{cartItems.length === 0 ? (
									""
								) : (
									<span className='d-flex align-items-center justify-content-center position-absolute'>
										{cartItems.length}
									</span>
								)}
							</Link>
						</div>
					</div>
				</div>
			</section>
			<div className='w-100 shadow-sm pb-4'>
				<div className='container nav-link'>
					<ul className='d-flex align-items-center list-unstyled gap-5 mb-0 mt-4'>
						<li>
							<NavLink to='/'>Trang chủ</NavLink>
						</li>
						<li>
							<NavLink to='/product'>Cửa hàng</NavLink>
						</li>
						<li>
							<NavLink to='/cart'>Giỏ hàng</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Liên hệ</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
