import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { editProduct, updateProduct } from "../../redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../redux/Constants/ProductConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const EditProductMain = ({ productId }) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [tag, setTag] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const productEdit = useSelector((state) => state.productEdit);
	const { product, error, loading } = productEdit;

	const productUpdate = useSelector((state) => state.productUpdate);
	const {
		success: successUpdate,
		error: errorUpdate,
		loading: loadingUpdate,
	} = productUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET });
			toast.success("Sản phẩm được cập nhật thành công");
			navigate("/products");
		} else {
			if (!product.name || product._id !== productId) {
				dispatch(editProduct(productId));
			} else {
				setName(product.name);
				setPrice(product.price);
				setDescription(product.description);
				setCountInStock(product.countInStock);
				setImage(product.image);
				setTag(product.tag);
			}
		}
	}, [product, dispatch, productId, successUpdate, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(
			updateProduct({
				_id: productId,
				name,
				price,
				description,
				image,
				countInStock,
				tag,
			})
		);
	};

	return (
		<section className='content-main' style={{ maxWidth: "1200px" }}>
			<form onSubmit={handleSubmit}>
				<div className='content-header'>
					<Link to='/products' className='btn btn-danger text-white'>
						Sản phẩm
					</Link>
					<h2 className='content-title'>Cập nhật sản phẩm</h2>
					<div>
						<button type='submit' className='btn btn-primary'>
							Cập nhật
						</button>
					</div>
				</div>

				<div className='row mb-4'>
					<div className='col-xl-8 col-lg-8'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body'>
								{errorUpdate && (
									<Message variant='alert-danger'>
										{errorUpdate}
									</Message>
								)}
								{loadingUpdate && <Loading />}
								{loading ? (
									<Loading />
								) : error ? (
									<Message variant='alert-danger'>
										{error}
									</Message>
								) : (
									<>
										<div className='mb-4'>
											<label
												htmlFor='product_title'
												className='form-label'
											>
												Tên sản phẩm
											</label>
											<input
												type='text'
												placeholder='Vui lòng nhập'
												className='form-control'
												id='product_title'
												required
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
											/>
										</div>
										<div className='mb-4'>
											<label
												htmlFor='product_price'
												className='form-label'
											>
												Giá
											</label>
											<input
												type='number'
												placeholder='Vui lòng nhập'
												className='form-control'
												id='product_price'
												required
												value={price}
												onChange={(e) =>
													setPrice(e.target.value)
												}
											/>
										</div>
										<div className='mb-4'>
											<label
												htmlFor='product_price'
												className='form-label'
											>
												Số lượng
											</label>
											<input
												type='number'
												placeholder='Vui lòng nhập'
												className='form-control'
												id='product_price'
												required
												value={countInStock}
												onChange={(e) =>
													setCountInStock(
														e.target.value
													)
												}
											/>
										</div>
										<div className='form-group mb-4'>
											<label className='form-label'>
												Tag
											</label>
											<select
												className='form-control'
												value={tag}
												onChange={(e) =>
													setTag(e.target.value)
												}
											>
												<option value=''>
													Chọn tags
												</option>
												<option value='Flash sale'>
													Flash sale
												</option>
												<option value='Hàng mới về'>
													Hàng mới về
												</option>
												<option value='Siêu ưu đãi'>
													Siêu ưu đãi
												</option>
											</select>
										</div>
										<div className='mb-4'>
											<label className='form-label'>
												Mô tả
											</label>
											<textarea
												placeholder='Vui lòng nhập'
												className='form-control'
												rows='7'
												required
												value={description}
												onChange={(e) =>
													setDescription(
														e.target.value
													)
												}
											></textarea>
										</div>
										<div className='mb-4'>
											<label className='form-label'>
												Hình ảnh
											</label>
											<input
												className='form-control'
												type='text'
												value={image}
												onChange={(e) =>
													setImage(e.target.value)
												}
											/>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default EditProductMain;
