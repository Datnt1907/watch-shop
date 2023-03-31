import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-3 pe-5'>
						<h1 className='fs-1 mb-4'>Atomic Shop</h1>
						<p className=''>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Auctor libero id et, in gravida. Sit diam duis
							mauris nulla cursus. Erat et lectus vel ut
							sollicitudin elit at amet.
						</p>
						<div className='icon d-flex justify-content-between fs-5'>
							<div className='img d-flex justify-content-between align-items-center'>
								<i className='fa-brands fa-google-play me-2'></i>
								<span>Google Play</span>
							</div>
							<div className='img d-flex justify-content-between align-items-center'>
								<i className='fa-brands fa-app-store-ios me-2'></i>
								<span>App Store</span>
							</div>
						</div>
					</div>

					<div className='col-2'>
						<h2>Về chúng tôi</h2>
						<ul>
							<li>Công việc</li>
							<li>Cửa hàng</li>
							<li>Chăm sóc</li>
							<li>Điều khoản & Điều kiện</li>
							<li>Chính sách bảo mật</li>
						</ul>
					</div>
					<div className='col-4'>
						<h2>Chăm sóc khách hàng</h2>
						<ul>
							<li>Trung tâm trợ giúp</li>
							<li>Thanh toán</li>
							<li>Theo dõi đơn hàng</li>
							<li>Affilate</li>
							<li>Hoàn trả & Hoàn tiền</li>
						</ul>
					</div>
					<div className='col-3'>
						<h2>Liên hệ</h2>
						<ul>
							<li>Số 1 Lĩnh Nam, Hoàng Mai, Hà Nội</li>
							<li>Email: example@gmail.com</li>
							<li>SDT: 0123456789</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
