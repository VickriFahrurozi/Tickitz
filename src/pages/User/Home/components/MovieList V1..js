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

export const NowShowingMoviesList = () => {
	const [MovieSchedule, setMovieSchedule] = useState({
		loading: false,
		result: {
			list: [],
		},
	});
	useEffect(() => {
		//use effect hanya akan jalan 1x , yaitu ketika reload web
		setMovieSchedule((prevState) => ({
			...prevState, // Ini prevstate konsepnya sama aja kaya ...movieschedule
			loading: true,
		}));
		/*--METHOD 1--*/
		// axios
		// 	.get('localhost:3001/api/v1/scheduled/', {
		// 		/* body*/
		// 	})
		// 	.then(() => {})
		// 	.catch(() => {});

		axios({
			method: 'GET',
			url: `${process.env.URL_API}/scheduled/`,
		})
			.then((res) => {
				setMovieSchedule({
					loading: false,
					result: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			{MovieSchedule.loading ? (
				<Loading />
			) : (
				<div className='row d-flex card-movie-list'>
					<div className='row container d-flex upcoming-movie-list'>
						{!MovieSchedule.result.list.length ? (
							<EmptyState /> //Cara Penulisan pertama moviescheduled(ada) && (maka) , yang kedua movieschedule ? (kondisi true) : else
						) : (
							MovieSchedule.result.list.map((item, index) => {
								//pake index sama key , kaitannya sama SEO

								return (
									<>
										<div className='col card border-white col-2' key={index}>
											<p>{item.movie_title}</p>
											<img
												className='image-card'
												src={item.movie_cover}
												alt={item.movie_title}
												title={item.movie_title}
											/>
										</div>
									</>
								);

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
			)}
		</>
	);
};

export const UpcomingMoviesListResponsive = () => {
	const [Movie, setMovie] = useState({
		loading: false,
		result: {
			list: [],
		},
	});
	useEffect(() => {
		setMovie((prevState) => ({
			...prevState,
			loading: true,
		}));

		axios({
			method: 'GET',
			url: `${process.env.URL_API}/Movies/?limit=100&page=1`,
		})
			.then((res) => {
				setMovie({
					loading: false,
					result: res.data,
				});
			})
			.catch((res) => {
				console.log('Failed');
			});
	}, []);

	return (
		<>
			{Movie.loading ? (
				<Loading />
			) : (
				<>
					<div className='row d-flex card-movie-list mb-5 '>
						<div className='row container d-flex upcoming-a-movie-list '>
							{!Movie.result.list.length ? (
								<EmptyState />
							) : (
								<div className='row '>
									<div className='col overflow-auto'>
										<div className=' col d-flex  '>
											{Movie.result.list.map((item, index) => {
												//pake index sama key , kaitannya sama SEO
												return (
													<>
														<div
															className='col mt-5 mb-5 card bg-transparent border-black margin-card col-sm-5 col-md-2  justify-content-center align-items-center'
															key={index}
														>
															<p className='h5 mt-4'>{item.title}</p>
															<img
																className='image-card -now-showing'
																src={`http://localhost:3001/uploads/${item.cover}`}
																alt={item.title}
																title={item.title}
																width={100}
																height={100}
															/>
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
				</>
			)}
		</>
	);
};
export const UpcomingMoviesList = () => {
	const [Movie, setMovie] = useState({
		loading: false,
		result: {
			list: [],
		},
	});
	useEffect(() => {
		setMovie((prevState) => ({
			...prevState,
			loading: true,
		}));

		axios({
			method: 'GET',
			url: `${process.env.URL_API}/Movies/?limit=100&page=1`,
		})
			.then((res) => {
				setMovie({
					loading: false,
					result: res.data,
				});
			})
			.catch((res) => {
				console.log('Failed');
			});
	}, []);

	return (
		<>
			{Movie.loading ? (
				<Loading />
			) : (
				<>
					<div className='row d-flex card-movie-list mb-5 '>
						<div className='row container d-flex upcoming-a-movie-list '>
							{!Movie.result.list.length ? (
								<EmptyState />
							) : (
								<div className='row '>
									<div className='col overflow-auto'>
										<div className=' col d-flex  '>
											{Movie.result.list.map((item, index) => {
												//pake index sama key , kaitannya sama SEO
												return (
													<>
														<div
															className='col mt-5 mb-5 card bg-transparent border-black margin-card col-sm-5 col-md-2  justify-content-center align-items-center'
															key={index}
														>
															<p className='h5 mt-4'>{item.title}</p>
															<img
																className='image-card -now-showing'
																src={`http://localhost:3001/uploads/${item.cover}`}
																alt={item.title}
																title={item.title}
																width={100}
																height={100}
															/>
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
				</>
			)}
		</>
	);
};
export const NowShowingMoviesListResponsive = () => {
	const [Movie, setMovie] = useState({
		loading: false,
		result: {
			list: [],
		},
	});
	useEffect(() => {
		setMovie((prevState) => ({
			...prevState,
			loading: true,
		}));

		axios({
			method: 'GET',
			url: `${process.env.URL_API}/Movies/?limit=100&page=1`,
		})
			.then((res) => {
				setMovie({
					loading: false,
					result: res.data,
				});
			})
			.catch((res) => {
				console.log('Failed');
			});
	}, []);

	return (
		<>
			{Movie.loading ? (
				<Loading />
			) : (
				<>
					<div className='row d-flex card-movie-list '>
						<div className='row container d-flex upcoming-a-movie-list '>
							{!Movie.result.list.length ? (
								<EmptyState />
							) : (
								<div className='row '>
									<div className='col overflow-auto'>
										<div className=' col d-flex  '>
											{Movie.result.list.map((item, index) => {
												//pake index sama key , kaitannya sama SEO
												return (
													<>
														<div
															className='col card bg-transparent border-white margin-card col-5  justify-content-center align-items-center'
															key={index}
														>
															<p className='h5 mt-4'>{item.title}</p>
															<img
																className='image-card -now-showing'
																src={`http://localhost:3001/uploads/${item.cover}`}
																alt={item.title}
																title={item.title}
																width={100}
																height={100}
															/>
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
				</>
			)}
		</>
	);
};
