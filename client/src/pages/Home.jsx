import React from "react";
import FlashSale from "../components/Product/FlashSale";
import Slide from "../components/Home/Slide/Slide";
import NewArrivals from "../components/Product/NewArrivals";
import Discount from "../components/Product/Discount";
import Annocument from "../components/Home/Annocument";
import Wrapper from "../components/Home/Wrapper";

const Home = () => {
	return (
		<>
			<Slide />
			<FlashSale />
			<NewArrivals />
			<Discount />
			<Annocument />
			<Wrapper />
		</>
	);
};

export default Home;
