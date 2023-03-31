import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../Home/Rating";

const ProductCard = ({ product }) => {
	useEffect(() => {}, []);
	return (
		<Link to={`/product/${product._id}`} className='col-3'>
			<div className=''>
				<div className='rounded-2 m-2 p-3 position-relative bg-white'>
					<div className='img'>
						{product.discount ? (
							<span className='discount position-absolute top-0 start-0 py-1 px-2 bg-danger rounded-3 text-white m-2'>
								Giảm {product.discount}%
							</span>
						) : (
							""
						)}
						<img
							className='w-100 object-fit-contain'
							src={product.image}
							alt=''
						/>
					</div>
					<div className='product-details'>
						<h3 className='fw-normal fs-5 text-truncate-2'>
							{product.name}
						</h3>
						<Rating value={product.rating} />
						<div className='price d-flex align-items-center justify-content-between text-danger'>
							<h4 className='fs-5'>
								{new Intl.NumberFormat().format(product.price)}đ
							</h4>
							{/* <button className='text-bg-danger fs-5 rounded-1 px-2'>
								<i className='fa fa-plus'></i>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
