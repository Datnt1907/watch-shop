import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product/Product";
import { listProduct } from "../redux/Actions/ProductActions";

const Shop = () => {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { products } = productList;

	useEffect(() => {
		dispatch(listProduct());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<section>
			<div className='container py-5'>
				<Product productItems={products} />
			</div>
		</section>
	);
};

export default Shop;
