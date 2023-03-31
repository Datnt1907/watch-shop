import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Rating from "../components/Home/Rating";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import {
	createProductReview,
	listProductDetails,
} from "../redux/Actions/ProductActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = () => {
	const [qty, setQty] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const product = useSelector((state) => state.productDetails.product);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const productReviewCreate = useSelector(
		(state) => state.productReviewCreate
	);
	const {
		loading: loadingCreateReview,
		error: errorCreateReview,
		success: successCreateReview,
	} = productReviewCreate;

	const AddToCartHandle = (e) => {
		e.preventDefault();
		navigate(`/cart/${id}?qty=${qty}`);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProductReview(id, {
				rating,
				comment,
			})
		);
	};

	useEffect(() => {
		if (successCreateReview) {
			toast.success("Bình luận thành công");
			setRating(0);
			setComment("");
			dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
		}
		dispatch(listProductDetails(id));
	}, [dispatch, id, successCreateReview]);
	return (
		<div className='container p-5'>
			<div className='row'>
				<div className='col-6'>
					<img src={product.image} alt='' />
				</div>
				<div className='col-6'>
					<div className='product-detail'>
						<div className='product-info'>
							<h2 className='product-name mt-5'>
								{product.name}
							</h2>
						</div>
						<p>{product.decsription}</p>
						<div className='product-count mt-5'>
							<div className='flex-box d-flex justify-content-between align-items-center mb-2 py-2 px-3 border-bottom'>
								<h6>Giá</h6>
								<span>
									{new Intl.NumberFormat().format(
										product.price
									)}
									đ
								</span>
							</div>
							<div className='flex-box d-flex justify-content-between align-items-center mb-2 py-2 px-3 border-bottom'>
								<h6>Trạng thái</h6>
								{product.countInStock > 0 ? (
									<span>Còn hàng</span>
								) : (
									<span>Hết hàng</span>
								)}
							</div>
							<div className='flex-box d-flex justify-content-between align-items-center mb-2 py-2 px-3 border-bottom'>
								<h6>Đánh giá</h6>
								<Rating value={product.rating} />
							</div>
							{product.countInStock > 0 ? (
								<>
									<div className='flex-box d-flex justify-content-between align-items-center mb-2 py-2 px-3 border-bottom'>
										<h6>Số lượng</h6>
										<select
											value={qty}
											onChange={(e) =>
												setQty(e.target.value)
											}
											className='w-25 py-2 text-center rounded-2'
										>
											{[
												...Array(
													product.countInStock
												).keys(),
											].map((x) => (
												<option
													key={x + 1}
													value={x + 1}
												>
													{x + 1}
												</option>
											))}
										</select>
									</div>
									<button
										onClick={AddToCartHandle}
										className='btn btn-danger w-100 mt-3 fs-5'
									>
										Thêm giỏ hàng
									</button>
								</>
							) : null}
						</div>
					</div>
				</div>
			</div>
			<div className='row my-5'>
				<div className='col-md-12'>
					<h6 className='fs-4'>Để lại đánh giá của bạn</h6>
					<div className='my-4'>
						{loadingCreateReview && <Loading />}
						{errorCreateReview && (
							<Message variant='alert-danger'>
								{errorCreateReview}
							</Message>
						)}
					</div>
					{userInfo ? (
						<form onSubmit={submitHandler}>
							<div className='my-4'>
								<strong>Vote sao</strong>
								<select
									value={rating}
									onChange={(e) => setRating(e.target.value)}
									className='col-12 bg-light p-3 mt-2 border-0 rounded'
								>
									<option value=''>Chọn...</option>
									<option value='1'>1 sao</option>
									<option value='2'>2 sao</option>
									<option value='3'>3 sao</option>
									<option value='4'>4 sao</option>
									<option value='5'>5 sao</option>
								</select>
							</div>
							<div className='my-4'>
								<strong>Đánh giá</strong>
								<textarea
									rows={4}
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									className='col-12 bg-light p-3 mt-2 border-0 rounded'
								></textarea>
							</div>
							<div className='my-3'>
								<button
									disabled={loadingCreateReview}
									className='col-12 bg-danger border-0 p-3 rounded text-white'
								>
									Gửi
								</button>
							</div>
						</form>
					) : (
						<div className='my-3'>
							<Message variant={"alert-warning"}>
								Vui lòng{" "}
								<Link to='/login'>
									" <strong>Đăng nhập</strong> "
								</Link>{" "}
								để đánh giá{" "}
							</Message>
						</div>
					)}
				</div>
				<div className='col-md-12 mt-5'>
					<h6 className='mb-3 fs-4'>Đánh giá</h6>
					{product.reviews.length === 0 && (
						<Message variant={"alert-info mt-3"}>
							Chưa có đánh giá
						</Message>
					)}
					{product.reviews.map((review) => (
						<div
							key={review._id}
							className='mb-5 mb-md-3 bg-light p-3 shadow-sm rounded'
						>
							<strong>{review.name}</strong>
							<Rating value={review.rating} />
							<span>{moment(review.createdAt).calendar()}</span>
							<div className='alert alert-info mt-3'>
								{review.comment}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
