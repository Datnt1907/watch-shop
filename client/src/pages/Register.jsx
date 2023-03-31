import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/Actions/userActions";

const Register = () => {
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const location = useLocation();
	const redirect = location.search ? location.search.split("=")[1] : "/";

	const userRegister = useSelector((state) => state.userRegister);
	// console.log(userLogin)
	const { userInfo } = userRegister;

	const navigate = useNavigate();
	useEffect(() => {
		if (userInfo) {
			// navigate(redirect);
			navigate("/login");
		}
	}, [userInfo, navigate, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, email, password));
	}
	return (
		<div className='d-flex align-items-center h-100 my-5'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-5'>
						<div className='card'>
							<div className='card-body p-4'>
								<h2 className=' text-center mb-5'>Đăng ký</h2>
								<form onSubmit={submitHandler}>
									<div className='form-outline mb-4'>
										<input
											type='text'
											className='form-control'
											placeholder='Họ tên'
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>

									<div className='form-outline mb-4'>
										<input
											type='email'
											className='form-control'
											placeholder='Email'
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>

									<div className='form-outline mb-4'>
										<input
											type='password'
											className='form-control'
											placeholder='Mật khẩu'
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>


									<div className='d-flex justify-content-center'>
										<button
											type='submit'
											className='btn btn-danger text-white w-25'
										>
											Đăng ký
										</button>
									</div>

									<p className='text-center text-muted mt-4 mb-0'>
										Đã có tài khoản?{" "}
										<Link
											to='/login'
											className='fw-bold text-body'
										>
											<u>Đăng nhập</u>
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

export default Register;
