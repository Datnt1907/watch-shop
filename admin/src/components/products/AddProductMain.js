import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createProduct } from "../../redux/Actions/ProductActions";
import { PRODUCT_CREATE_RESET } from "../../redux/Constants/ProductConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const AddProductMain = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [tag, setTag] = useState("");

	const dispatch = useDispatch();

	const productCreate = useSelector((state) => state.productCreate);
	const { product, error, loading } = productCreate;

	useEffect(() => {
		if (product) {
			toast.success("Thêm sản phẩm thành công");
			dispatch({ type: PRODUCT_CREATE_RESET });
			setName("");
			setPrice(0);
			setDescription("");
			setCountInStock(0);
			setImage("");
		}
	}, [product, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			createProduct(name, price, description, image, countInStock, tag)
		);
	};
	return (
		<section className='content-main' style={{ maxWidth: "1200px" }}>
			<form onSubmit={submitHandler}>
				<div className='content-header'>
					<Link to='/products' className='btn btn-danger text-white'>
						Sản phẩm
					</Link>
					<h2 className='content-title'>Thêm sản phẩm</h2>
					<div>
						<button type='submit' className='btn btn-primary'>
							Thêm ngay
						</button>
					</div>
				</div>

				<div className='row mb-4'>
					<div className='col-xl-8 col-lg-8'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body'>
								{error && (
									<Message variant='alert-danger'>
										{error}
									</Message>
								)}
								{loading && <Loading />}
								<div className='mb-4'>
									<label
										htmlFor='product_title'
										className='form-label'
									>
										Tên sản phẩm
									</label>
									<input
										onChange={(e) =>
											setName(e.target.value)
										}
										value={name}
										type='text'
										placeholder='Vui lòng nhập'
										className='form-control'
										id='product_title'
										required
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
										onChange={(e) =>
											setPrice(e.target.value)
										}
										value={price}
										type='number'
										placeholder='Vui lòng nhập'
										className='form-control'
										id='product_price'
										required
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
										onChange={(e) =>
											setCountInStock(e.target.value)
										}
										value={countInStock}
										type='number'
										placeholder='Vui lòng nhập'
										className='form-control'
										id='product_price'
										required
									/>
								</div>
								<div className='form-group mb-4'>
									<label className='form-label'>Tag</label>
									<select
										className='form-control'
										value={tag}
										onChange={(e) => setTag(e.target.value)}
									>
										<option value=''>Chọn tags</option>
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
									<label className='form-label'>Mô tả</label>
									<textarea
										onChange={(e) =>
											setDescription(e.target.value)
										}
										value={description}
										placeholder='Vui lòng nhập'
										className='form-control'
										rows='7'
										required
									></textarea>
								</div>
								<div className='mb-4'>
									<label className='form-label'>
										Hình ảnh
									</label>
									<input
										className='form-control'
										type='text'
										placeholder='Đường dẫn ảnh'
										onChange={(e) =>
											setImage(e.target.value)
										}
										value={image}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default AddProductMain;
