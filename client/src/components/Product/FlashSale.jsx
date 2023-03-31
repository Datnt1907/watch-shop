import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../redux/Actions/ProductActions";

const FlashSale = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProduct());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section className='bg-secondary-subtle mt-5 py-5'>
			<div className='container'>
				<div className='d-flex align-items-center'>
					<i className='fa fa-bolt fs-4 text-danger me-3'></i>
					<h1 className='fs-2'>Flash sale</h1>
				</div>
				<div className='row'>
					{products.length > 0 &&
						products
							.filter((product) => product.tag === "Flash sale")
							.map((product, index) => (
								<ProductCard product={product} key={index} />
							))}
				</div>
			</div>
		</section>
	);
};

export default FlashSale;
