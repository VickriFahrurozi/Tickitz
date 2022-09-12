/** @format */

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './HomeAdmin.css';
import { useNavigate } from 'react-router-dom';
import { Loading, EmptyState } from '../../../../components/Loading';
import { getMovies, addMovies } from '../../../../redux/actions/Movies';
import { useDispatch, useSelector } from 'react-redux/es/exports'; //selector buat nge get dari reducers
import { useSearchParams } from 'react-router-dom';
export const AdminMovieList = () => {
		const data = useSelector((state) => state.movies);
		const dataLogin = useSelector((state) => state.auth);
		const [params, setparams] = useSearchParams();
		const dispatch = useDispatch();
		let navigate = useNavigate();
		let isi = [''];
		const [Refetch, setRefefetch] = useState(false);
		const [Movie, setMovie] = useState({
			loading: false,
			result: {
				list: [],
			},
		});
		const [FormAddData, setFormAddData] = useState({
			id: '',
			title: '',
			cover: '',
			release_date: '',
			director: '',
			description: '',
			casts: '',
			category: '',
			duration_hours: '',
			duration_minute: '',
			showing_date_start: '',
			showing_date_end: '',
		});
		const [gettoken, setgettoken] = useState({
			token: '',
			tes: '',
		});

		const [paginate, setpaginate] = useState({
			page: 1,
			limit: 4,
		});
		const formdata = new FormData();
		formdata.append('title', FormAddData.title);
		formdata.append('cover', FormAddData.cover);
		formdata.append('director', FormAddData.director);
		formdata.append('release_date', FormAddData.release_date);
		formdata.append('description', FormAddData.description);
		formdata.append('casts', FormAddData.casts);
		formdata.append('category', FormAddData.category);
		formdata.append('duration_hours', FormAddData.duration_hours);
		formdata.append('duration_minute', FormAddData.duration_minute);
		formdata.append('showing_date_start', FormAddData.showing_date_start);
		formdata.append('showing_date_end', FormAddData.showing_date_end);

		useEffect(() => {
			if (dataLogin.data.role != 222) {
				navigate('/Login', { replace: true });
			} else {
				setgettoken((prevData) => ({
					...prevData,
					token: JSON.parse(localStorage.getItem('AccountData')) ?? {},
				})),
					dispatch(getMovies(paginate.limit, paginate.page));
			}
		}, [Refetch]);
		const handleAddNewMovie = async (e) => {
			e.preventDefault();
			dispatch(addMovies(formdata, gettoken.token.data.token));
			window.location.reload();
			navigate('/Admin/Home', { replace: true });
		};
		const handleUpdateMovie = async (e) => {
			e.preventDefault();

			try {
				const result = await axios({
					method: 'PATCH',
					data: formdata,
					url: `${process.env.URL_API}/movies/id?id=${FormAddData.id}`,
					headers: {
						token: gettoken.token.data.token,
					},
				});

				if (result.data.status == 200) {
					alert(result.data.message);
					setRefefetch(!Refetch);
					window.location.reload();
				} else {
					alert('GAGAL');
				}
			} catch (error) {
				alert(error.response.data.message);
			}
		};
		const handleDeleteMovie = (id) => {
			if (window.confirm(`Are You Sure ?`)) {
				axios({
					method: 'DELETE',
					url: `${process.env.URL_API}/movies?id=${id}`,
					headers: {
						token: gettoken.token.data.token,
					},
				})
					.then((res) => {
						alert(res.data.message);
						setRefefetch(!Refetch);
					})
					.catch((error) => {
						alert(error.response.data.message);
					});
			}
		};
		const handlePaginate = () => {
			dispatch(getMovies(paginate.limit, paginate.page));
			params.set('page', paginate.page);
			setparams(params);
			setRefefetch(!Refetch);
		};

		let totalpage = Array(data.data.totalpage).fill();
		return (
			<>
				{data.loading ? (
					<>
						<Loading />
					</>
				) : (
					<>
						<button
							className='btn btn-primary col-2'
							data-bs-toggle='modal'
							data-bs-target='#AddNewMovie'
						>
							Add New Movie
						</button>
						<div className='row d-flex card-movie-list '>
							<div className='row container d-flex upcoming-movie-list '>
								{!data.data.list.length ? (
									<>
										<EmptyState />
									</>
								) : (
									<div className='row'>
										<div className='col overflow-scroll'>
											<div className='justify-content-center'>
												{data.data.list.map((item, index) => {
													return (
														<>
															<div
																className='col card border-purple margin-card col-8 m-5 d-flex movies-list'
																key={index}
															>
																<p className='movie_title mb-4'>{item.title}</p>

																<div className='row'>
																	<div className='col'>
																		<div className='col-12 d-flex'>
																			<div className=' col-3 background-1'>
																				<img
																					className='image-card -now-showing'
																					src={`http://localhost:3001/uploads/${item.cover}`}
																					alt={item.cover}
																					title={item.title}
																				/>
																			</div>
																			<div className=' col-4 background-2'>
																				{/* Button*/}
																				<p className='mt-5'>
																					<div className='movie-details d-flex'>
																						Tittle :{' '}
																						<div className='movie-fill align-items-end'>
																							{' '}
																							{item.title}
																						</div>
																					</div>
																				</p>

																				<p className=''>
																					<div className='movie-details d-flex'>
																						Director :{' '}
																						<div className='movie-fill'>
																							{item.director}
																						</div>
																					</div>
																				</p>
																				{/* <p className=''>
																				<div className='movie-details d-flex'>
																					Description :{' '}
																					<div className='movie-fill'>
																						{item.description}
																					</div>
																				</div>
																			</p> */}
																				<p className=''>
																					<div className='movie-details d-flex'>
																						Release Date :
																						<div className='movie-fill'>
																							{item.release_date.slice(0, 10)}
																						</div>
																					</div>
																				</p>

																				<div className='col d-flex movie-button justify-content-around mb-4 '>
																					<button
																						className='btn btn-primary col-5'
																						data-bs-toggle='modal'
																						data-bs-target='#UpdateMovie'
																						onClick={() => {
																							setFormAddData((prevState) => ({
																								...prevState,
																								id: item.id,
																								title: item.title,
																								cover: item.cover,
																								release_date:
																									item.release_date.slice(
																										0,
																										10
																									),
																								director: item.director,
																								description: item.description,
																								casts: item.casts,
																								category: item.movie_category,
																								duration_hours:
																									item.duration_hours,
																								duration_minute:
																									item.duration_minute,
																								showing_date_start:
																									item.showing_date_start.slice(
																										0,
																										10
																									),
																								showing_date_end:
																									item.showing_date_end.slice(
																										0,
																										10
																									),
																							}));
																						}}
																					>
																						Edit Movie
																					</button>
																					<button
																						className='btn btn-danger col-5'
																						onClick={() => {
																							handleDeleteMovie(item.id);
																						}}
																					>
																						Delete Movie
																					</button>
																				</div>
																			</div>
																			<div className=' col background-3 flex-wrap'>
																				<p className='mt-5'>
																					<div className='movie-details d-flex'>
																						Casts :{' '}
																						<div className='movie-fill align-items-end'>
																							{' '}
																							{item.casts}
																						</div>
																					</div>
																				</p>

																				<p className=''>
																					<div className='movie-details d-flex'>
																						Duration :{' '}
																						<div className='movie-fill align-items-end'>
																							{' '}
																							{item.duration_hours} h
																							{item.duration_minute} m
																						</div>
																					</div>
																				</p>
																				<p className=''>
																					<div className='movie-details d-flex'>
																						Showing Date Start :{' '}
																						<div className='movie-fill align-items-end'>
																							{' '}
																							{item.showing_date_start.slice(
																								0,
																								10
																							)}
																						</div>
																					</div>
																				</p>
																				<p className=''>
																					<div className='movie-details d-flex'>
																						Showing Date End :{' '}
																						<div className='movie-fill align-items-end'>
																							{' '}
																							{item.showing_date_end.slice(
																								0,
																								10
																							)}
																						</div>
																					</div>
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</>
													);
												})}
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
						<div
							class='modal fade'
							id='AddNewMovie'
							tabindex='-1'
							aria-labelledby='AddNewMovieLabel'
							aria-hidden='true'
						>
							<div class='modal-dialog'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5 class='modal-title' id='AddNewMovieLabel'>
											Add Movie
										</h5>
										<button
											type='button'
											class='btn-close'
											data-bs-dismiss='modal'
											aria-label='Close'
										></button>
									</div>
									<form
										action='/action_page_binary.asp'
										method='post'
										enctype='multipart/form-data'
										onSubmit={(e) => handleAddNewMovie(e)}
									>
										<div class='modal-body'>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Title
												</label>
												<input
													type='text'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															title: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='customFile' class='form-label'>
													Cover
												</label>
												<input
													type='file'
													class='form-control-file'
													id='customFile'
													name='uploaded_file'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															cover: e.target.files[0],
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Release Date
												</label>
												<input
													type='date'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															release_date: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Director
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															director: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Description
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															description: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Casts
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															casts: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Category
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															category: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Duration Hours
												</label>
												<input
													type='number'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															duration_hours: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Duration Minute
												</label>
												<input
													type='number'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															duration_minute: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Showing Date Start
												</label>
												<input
													type='date'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															showing_date_start: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Showing Date End
												</label>
												<input
													type='date'
													class='form-control'
													id='exampleInputEmail1'
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															showing_date_end: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-bs-dismiss='modal'
												>
													Close
												</button>
												<button
													type='button'
													class='btn btn-primary'
													onClick={(e) => {
														handleAddNewMovie(e);
														navigate('/Admin/Home', { replace: true });
													}}
												>
													Save changes
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div
							class='modal fade'
							id='UpdateMovie'
							tabindex='-1'
							aria-labelledby='UpdateMovieLabel'
							aria-hidden='true'
						>
							<div class='modal-dialog'>
								<div class='modal-content'>
									<div class='modal-header'>
										<h5 class='modal-title' id='UpdateMovieLabel'>
											Update Movie
										</h5>
										<button
											type='button'
											class='btn-close'
											data-bs-dismiss='modal'
											aria-label='Close'
										></button>
									</div>
									<form
										action='/action_page_binary.asp'
										method='post'
										enctype='multipart/form-data'
										onSubmit={(e) => handleUpdateMovie(e)}
									>
										<div class='modal-body'>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Title
												</label>
												<input
													type='text'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.title}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															title: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='customFile' class='form-label'>
													Cover
												</label>
												<input
													type='file'
													class='form-control-file'
													id='customFile'
													name='uploaded_file'
													defaultValue={FormAddData.cover}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															cover: e.target.files[0],
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Release Date
												</label>
												<input
													type='date'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.release_date}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															release_date: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Director
												</label>
												<input
													type='text'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.director}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															director: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Description
												</label>
												<input
													type='text'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.description}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															description: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Casts
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.casts}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															casts: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Category
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.category}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															category: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Duration Hours
												</label>
												<input
													type='email'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.duration_hours}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															duration_hours: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Duration Minute
												</label>
												<input
													type='number'
													class='form-control'
													id='exampleInputEmail1'
													defaultValue={FormAddData.duration_minute}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															duration_minute: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Showing Date Start
												</label>
												<input
													type='date'
													id='start'
													name='trip-start'
													class='form-control'
													min='2022-07-07'
													max='2022-12-31'
													defaultValue={FormAddData.showing_date_start}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															showing_date_start: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='mb-3'>
												<label for='exampleInputEmail1' class='form-label'>
													Showing Date End
												</label>
												<input
													type='date'
													id='start'
													name='trip-start'
													class='form-control'
													min='2022-07-07'
													max='2022-12-31'
													defaultValue={FormAddData.showing_date_end}
													onChange={(e) => {
														setFormAddData((prevState) => ({
															...prevState,
															showing_date_end: e.target.value,
														}));
													}}
												/>
											</div>
											<div class='modal-footer'>
												<button
													type='button'
													class='btn btn-secondary'
													data-bs-dismiss='modal'
												>
													Close
												</button>
												<button
													type='button'
													class='btn btn-primary'
													onClick={(e) => {
														handleUpdateMovie(e);
														navigate('/Admin/Home', { replace: true });
													}}
												>
													Save changes
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<form action='/action_page_binary.asp' method='post'>
							<input
								type='text'
								placeholder='Limit'
								onChange={(e) => {
									setpaginate((prevState) => ({
										...prevState,
										limit: e.target.value,
									}));
								}}
							/>

							<button
								className='btn btn-primary ms-3'
								onClick={() => {
									setpaginate((prevData) => ({
										...prevData,
										page: 1,
									}));
									handlePaginate();
								}}
							>
								{' '}
								Submit
							</button>
						</form>

						{totalpage.map((item, index) => {
							return (
								<button
									className={
										index + 1 == paginate.page
											? 'btn btn-danger m-4'
											: 'btn btn-primary m-4'
									}
									onClick={() => {
										setpaginate((prevData) => ({
											...prevData,
											// limit: paginate.,
											page: index + 1,
										}));
										handlePaginate();

										// setRefefetch(!fetch);
									}}
								>
									{index + 1}
								</button>
							);
						})}
					</>
				)}
			</>
		);
};
