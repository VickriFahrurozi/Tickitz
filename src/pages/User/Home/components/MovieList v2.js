/** @format */
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {
	BlackWidow,
	TheWitches,
	Tenet,
	Spiderman,
	TheLionKing,
	JohnWick,
} from '../../../../components/Asset/Picture Asset';
import './component.css';
import { Loading, EmptyState } from '../../../../components/Loading';
import { data } from 'jquery';
import { Modal } from 'bootstrap';

export const NowShowingMoviesListv2 = ({ isAdmin = false }) => {
	const [Refetch, setRefefetch] = useState(false);
	const [MovieSchedule, setMovieSchedule] = useState([]);
	const [FormAddData, setFormAddData] = useState({
		movie_id: '',
		cinema_id: '',
		studio_id: '',
		movie_title: '',
		movie_cover: '',
		cinema_name: '',
		scheduled_price_min: '',
		scheduled_price_max: '',
		scheduled_date_start: '',
		scheduled_date_end: '',
	});
	const [FormDeleteData, setformDeleteData] = useState({
		scheduled_id: '',
	});
	useEffect(() => {
		/*--METHOD 1--*/
		// axios
		// 	.get('localhost:3001/api/v1/scheduled/', {
		// 		/* body*/
		// 	})
		// 	.then(() => {})
		// 	.catch(() => {});

		axios({
			method: 'GET',
			url: 'http://localhost:3001/api/v1/scheduled/',
		})
			.then((res) => {
				setMovieSchedule(res.data.list);
				a = 1;
			})
			.catch((res) => {
				console.log('Failed');
			});
	}, [Refetch]); //Use Effect akan dipanggil kembali kalau ada perubahan di dependencies nya (array)

	if (isAdmin == false) {
		return (
			<>
				{!a ? (
					<EmptyState title='DATA GA ADA' />
				) : (
					<>
						<div className='row d-flex card-movie-list'>
							<div className='row container d-flex upcoming-movie-list'>
								{!MovieSchedule.length ? (
									<Loading /> //Cara Penulisan pertama moviescheduled(ada) && (maka) , yang kedua movieschedule ? (kondisi true) : else
								) : (
									MovieSchedule.map((item, index) => {
										//pake index sama key , kaitannya sama SEO
										return (
											<>
												<div
													className='col card border-white col-2'
													key={index}
												>
													<p className='movie_title'>{item.movie_title}</p>
													<img
														className='image-card'
														src='https://www.linkpicture.com/q/Black-Widow.png'
														alt={item.movie_title}
														title={item.movie_title}
													/>
												</div>
											</>
										);
										// if (item.scheduled_id == 2) {
										// }
										//Ini Bisa Get data dari hasil map nya , contoh =
										// return (
										// 	<>
										// 		<div className='d-flex'>
										// 			<a>{item.movie_title}</a>
										// 		</div>
										// 	</>
										// );
									})
								)}
								{/* <div className='col card border-white  margin-card col-2 '>
							<img className='image-card' src={TheLionKing} alt='' />
						</div>
						<div className='col card border-white col-2 '>
							<img className='image-card' src={JohnWick} alt='' />
						</div>
						<div className='col card border-white margin-card col-2'>
							<img className='image-card' src={Spiderman} alt='' />
						</div>
						<div className='col card border-white col-2 '>
							<img className='image-card' src={TheLionKing} alt='' />
						</div> */}
							</div>
						</div>
					</>
				)}
			</>
		);
	} else {
		const handleAddNewMovie = async (e) => {
			e.preventDefault();
			try {
				const result = await axios({
					method: 'POST',
					data: FormAddData,
					url: 'http://localhost:3001/api/v1/scheduled/',
				});
				if (result.data.status == 200) {
					alert('BERHASIL');
					setRefefetch(!Refetch);
				} else {
					alert('GAGAL');
				}
			} catch (error) {
				alert(error.response.data.message);
			}
		};
		const handleDeleteMovie = async (id) => {
			id.preventDefault();
			try {
				const result = await axios({
					method: 'DELETE',
					data: FormDeleteData,
					url: 'http://localhost:3001/api/v1/scheduled/',
				});
				if (result.data.status == 200) {
					alert('BERHASIL');
					setRefefetch(!Refetch);
				} else {
					alert('GAGAL');
				}
			} catch (error) {
				alert(error.response.data.message);
			}
		};

		return (
			<>
				{!MovieSchedule.length ? (
					<EmptyState title='DATA GA ADA' />
				) : (
					<>
						<div className='row d-flex card-movie-list'>
							<div className='row container d-flex upcoming-movie-list'>
								<button
									className='btn btn-info'
									data-bs-toggle='modal'
									data-bs-target='#AddNewMovie'
								>
									Add New Movie
								</button>
								{!MovieSchedule.length ? (
									<Loading />
								) : (
									MovieSchedule.map((item, index) => {
										return (
											<>
												<div
													className='col card border-white col-2'
													key={index}
												>
													<p className='movie_title'>{item.movie_title}</p>
													<img
														className='image-card'
														src='https://www.linkpicture.com/q/Black-Widow.png'
														alt={item.movie_title}
														title={item.movie_title}
													/>
													<div className='col d-flex'>
														<button className='btn btn-primary'>
															Edit Movie
														</button>
														<button
															className='btn btn-danger'
															data-bs-toggle='modal'
															data-bs-target='#DeleteMovie'
														>
															Delete Movie
														</button>
													</div>
												</div>
											</>
										);
									})
								)}
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
													Modal title
												</h5>
												<button
													type='button'
													class='btn-close'
													data-bs-dismiss='modal'
													aria-label='Close'
												></button>
											</div>
											<form onSubmit={(e) => handleAddNewMovie(e)}>
												<div class='modal-body'>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Movie ID
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	movie_id: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Cinema ID
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	cinema_id: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Studio ID
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	studio_id: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Movie Title
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	movie_title: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Movie Cover
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	movie_cover: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Cinema Name
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	cinema_name: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Scheduled Price Min
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	scheduled_price_min: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Scheduled Price Max
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	scheduled_price_max: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Scheduled Date Start
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	scheduled_date_start: e.target.value,
																}));
															}}
														/>
													</div>
													<div class='mb-3'>
														<label for='exampleInputEmail1' class='form-label'>
															Scheduled Date End
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(e) => {
																setFormAddData((prevState) => ({
																	...prevState,
																	scheduled_date_end: e.target.value,
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
															onClick={(id) => handleDeleteMovie(id)}
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
									id='DeleteMovie'
									tabindex='-1'
									aria-labelledby='DeleteMovie'
									aria-hidden='true'
								>
									<div class='modal-dialog'>
										<div class='modal-content'>
											<div class='modal-header'>
												<h5 class='modal-title' id='DeleteMovie'>
													Modal title
												</h5>
												<button
													type='button'
													class='btn-close'
													data-bs-dismiss='modal'
													aria-label='Close'
												></button>
											</div>
											<form onSubmit={(id) => handleDeleteMovie(id)}>
												<div class='modal-body'>
													<div class='mb-3'>
														<label
															for='exampleInputEmail1'
															class='form-label'
															placeholder='TES PLACE HOLDER'
														>
															Scheduled ID
														</label>
														<input
															type='email'
															class='form-control'
															id='exampleInputEmail1'
															onChange={(id) => {
																setformDeleteData((prevState) => ({
																	...prevState,
																	scheduled_id: id.target.value,
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
															onClick={(id) => handleDeleteMovie(id)}
														>
															Save changes
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
};

// MovieSchedule.result.list.map((item, index) => {
// 	//pake index sama key , kaitannya sama SEO
// 	if (item.scheduled_id == 1) {
// 		return (
// 			<>
// 				<div className='col card border-white col-2' key={index}>
// 					<p>{item.movie_title}</p>
// 					<img
// 						className='image-card'
// 						src={item.movie_cover}
// 						alt={item.movie_title}
// 						title={item.movie_title}
// 					/>
// 				</div>
// 			</>
// 		);
// 	}
// 	//Ini Bisa Get data dari hasil map nya , contoh =
// 	// return (
// 	// 	<>
// 	// 		<div className='d-flex'>
// 	// 			<a>{item.movie_title}</a>
// 	// 		</div>
// 	// 	</>
// 	// );
// });

//BISAAAA
// if (MovieSchedule.loading) {
// 	return <Loading />;
// }
// if (!MovieSchedule.result.length) {
// 	return <EmptyState />;
// }
// return (
// 	<>
// 		<div className='row d-flex card-movie-list'>
// 			<div className='row container d-flex upcoming-movie-list'>
// 				{MovieSchedule.result.data.map((item, index) => {
// 					//pake index sama key , kaitannya sama SEO
// 					if (item.scheduled_id == 1) {
// 						return (
// 							<>
// 								<div className='col card border-white col-2' key={index}>
// 									<p>{item.movie_title}</p>
// 									<img
// 										className='image-card'
// 										src={item.movie_cover}
// 										alt={item.movie_title}
// 										title={item.movie_title}
// 									/>
// 								</div>
// 							</>
// 						);
// 					}
// 					//Ini Bisa Get data dari hasil map nya , contoh =
// 					// return (
// 					// 	<>
// 					// 		<div className='d-flex'>
// 					// 			<a>{item.movie_title}</a>
// 					// 		</div>
// 					// 	</>
// 					// );
// 				})}

// 				{/* <div className='col card border-white  margin-card col-2 '>
// 					<img className='image-card' src={TheLionKing} alt='' />
// 				</div>
// 				<div className='col card border-white col-2 '>
// 					<img className='image-card' src={JohnWick} alt='' />
// 				</div>
// 				<div className='col card border-white margin-card col-2'>
// 					<img className='image-card' src={Spiderman} alt='' />
// 				</div>
// 				<div className='col card border-white col-2 '>
// 					<img className='image-card' src={TheLionKing} alt='' />
// 				</div> */}
// 			</div>
// 		</div>
// 	</>
// );
