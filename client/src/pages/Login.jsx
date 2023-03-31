import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/Actions/userActions";

const Login = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const location = useLocation();
	// console.log(location);
	const redirect = location.search ? location.search.split("=")[1] : "";

	const userLogin = useSelector((state) => state.userLogin);
	// console.log(userLogin)
	const { userInfo } = userLogin;

	const navigate = useNavigate();
	useEffect(() => {
		if (userInfo) {
			console.log(redirect);
			navigate(`/${redirect}`);
		}
	}, [userInfo, navigate, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<div className='d-flex align-items-center h-100 my-5'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-5'>
						<div className='card'>
							<div className='card-body p-4'>
								<h2 className=' text-center mb-5'>Đăng nhập</h2>
								<form onSubmit={submitHandler}>
									<div className='form-outline mb-4'>
										<input
											type='email'
											className='form-control'
											placeholder='Email'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>

									<div className='form-outline mb-4'>
										<input
											type='password'
											className='form-control'
											placeholder='Mật khẩu'
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											type='submit'
											className='btn btn-danger text-white w-25'
										>
											Đăng nhập
										</button>
									</div>

									<p className='text-center text-muted mt-4 mb-0'>
										Chưa có tài khoản?{" "}
										<Link
											to={
												redirect
													? `/register?redirect=${redirect}`
													: "/register"
											}
											className='fw-bold text-body'
										>
											<u>Đăng ký</u>
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
