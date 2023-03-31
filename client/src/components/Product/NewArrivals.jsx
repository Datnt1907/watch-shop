import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../redux/Actions/ProductActions";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProduct());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section className='bg-secondary-subtle py-5'>
			<div className='container'>
				<div className='d-flex align-items-center'>
					<img
						src='https://img.icons8.com/glyph-neue/64/26e07f/new.png'
						alt=''
						className='me-2'
					/>
					<h1 className='fs-2'>Hàng mới về</h1>
				</div>
				<div className='row'>
					{products.length > 0 &&
						products
							.filter((product) => product.tag === "Hàng mới về")
							.map((product, index) => (
								<ProductCard product={product} key={index} />
							))}
				</div>
			</div>
		</section>
	);
};

export default NewArrivals;
