import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/Actions/ProductActions";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const MainProducts = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	const productDelete = useSelector((state) => state.productDelete);
	const { error: errorDelete, success: successDelete } = productDelete;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch, successDelete]);
	return (
		<section className='content-main'>
			<div className='content-header'>
				<h2 className='content-title'>Sản phẩm</h2>

				<div>
					<Link to='/addproduct' className='btn btn-primary'>
						Thêm mới
					</Link>
				</div>
			</div>

			<div className='card mb-4 shadow-sm'>
				<header className='card-header bg-white '>
					<div className='row gx-3 py-3'>
						<div className='col-lg-4 col-md-6 me-auto '>
							<input
								type='search'
								placeholder='Tìm kiếm'
								className='form-control p-2'
							/>
						</div>
						<div className='col-lg-2 col-6 col-md-3'>
							<select className='form-select'>
								<option>All category</option>
								<option>Electronics</option>
								<option>Clothings</option>
								<option>Something else</option>
							</select>
						</div>
						<div className='col-lg-2 col-6 col-md-3'>
							<select className='form-select'>
								<option>Latest added</option>
								<option>Cheap first</option>
								<option>Most viewed</option>
							</select>
						</div>
					</div>
				</header>

				<div className='card-body'>
					<div className='row'>
						{/* Products */}
						{errorDelete && (
							<Message variant='alert-danger'>{error}</Message>
						)}
						{loading ? (
							<Loading />
						) : error ? (
							<Message variant='alert-danger'>{error}</Message>
						) : (
							<div className='row'>
								{/* Products */}
								{products.map((product) => (
									<Product
										product={product}
										key={product._id}
									/>
								))}
							</div>
						)}
					</div>

					<nav
						className='float-end mt-4'
						aria-label='Page navigation'
					>
						<ul className='pagination'>
							<li className='page-item disabled'>
								<Link className='page-link' to='#'>
									Previous
								</Link>
							</li>
							<li className='page-item active'>
								<Link className='page-link' to='#'>
									1
								</Link>
							</li>
							<li className='page-item'>
								<Link className='page-link' to='#'>
									2
								</Link>
							</li>
							<li className='page-item'>
								<Link className='page-link' to='#'>
									3
								</Link>
							</li>
							<li className='page-item'>
								<Link className='page-link' to='#'>
									Next
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
};

export default MainProducts;
