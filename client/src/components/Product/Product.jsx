import React from "react";
import { Link } from "react-router-dom";

const Product = ({ productItems }) => {
	return (
		<div className='row'>
			{productItems.map((productItems, index) => {
				return (
					<Link
						to={`/product/${productItems._id}`}
						className='col-3'
						key={index}
					>
						<div className='rounded-2 m-2 p-3 position-relative bg-white border mb-4'>
							<div className='img'>
								{productItems.discount ? (
									<span className='discount position-absolute top-0 start-0 py-1 px-2 bg-danger rounded-3 text-white m-2'>
										Giảm {productItems.discount}%
									</span>
								) : (
									""
								)}
								<img
									className='w-100'
									src={productItems.image}
									alt=''
								/>
							</div>
							<div className='product-details'>
								<h3 className='fw-normal fs-5'>
									{productItems.name}
								</h3>
								<div className='rate text-warning'>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
									<i className='fa fa-star'></i>
								</div>
								<div className='price d-flex align-items-center justify-content-between text-danger'>
									<h4 className='fs-5'>
										{new Intl.NumberFormat().format(
											productItems.price
										)}
										đ
									</h4>
									{/* <button className='text-bg-danger fs-5 rounded-1 px-2'>
										<i className='fa fa-plus'></i>
									</button> */}
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Product;
