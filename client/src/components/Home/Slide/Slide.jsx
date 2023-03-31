import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Slide = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<div className='container'>
			<Slider {...settings}>
				{Sdata.map((value, index) => (
					<div
						className='d-flex slide justify-content-between'
						key={index}
					>
						<div className='left'>
							<h1 className='mt-5 mb-4'>{value.title}</h1>
							<p className='mt-2'>{value.desc}</p>
							<Link
								to='/product'
								className='btn btn-danger py-2 px-4 fw-bold fs-5'
							>
								Mua ngay
							</Link>
						</div>
						<div className='right'>
							<img src={value.image} alt='' />
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Slide;
