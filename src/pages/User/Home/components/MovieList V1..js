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
			url: 'http://localhost:3001/api/v1/scheduled/',
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
	return (
		<>
			<div className='overflow-auto'>
				<div className='row d-flex card-movie-list card-movie-list-a '>
					<div className='row container d-flex upcoming-movie-list  '>
						<div className='col card border-white col-2 upcoming-movie-list-a-a'>
							<img className='image-card' src={BlackWidow} alt='' />
							<p className='movie-title movie-title-a'>Black Widow</p>
							<p className='movie-title movie-genre movie-genre-a'>
								Action,Adventure,Sci-Fi
							</p>
							<button className='btn btn-outline-danger btn-outline-danger-a'>
								Details
							</button>
						</div>
						<div className='col card border-white  margin-card col-2 upcoming-movie-list-a-a'>
							<img className='image-card' src={TheWitches} alt='' />
							<p className='movie-title movie-title-a'>The Witches</p>
							<p className='movie-title movie-genre movie-genre-a'>
								Adventure, Comedy,Family
							</p>
							<button className='btn btn-outline-danger btn-outline-danger-a'>
								Details
							</button>
						</div>
						<div className='col card border-white col-2 upcoming-movie-list-a-a'>
							<img className='image-card' src={Tenet} alt='' />
							<p className='movie-title movie-title-a'>Tent</p>
							<p className='movie-title movie-genre movie-genre-a'>
								Action,Sci-Fi
							</p>
							<button className='btn btn-outline-danger btn-outline-danger-a'>
								Details
							</button>
						</div>
						<div className='col card border-white margin-card col-2 upcoming-movie-list-a-a'>
							<img className='image-card' src={BlackWidow} alt='' />
							<p className='movie-title movie-title-a'>Black Widow</p>
							<p className='movie-title movie-genre movie-genre-a'>
								Action,Adventure,Sci-Fi
							</p>
							<button className='btn btn-outline-danger btn-outline-danger-a'>
								Details
							</button>
						</div>
						<div className='col card border-white col-2 upcoming-movie-list-a-a'>
							<img className='image-card' src={TheWitches} alt='' />
							<p className='movie-title movie-title-a'>The Witches</p>
							<p className='movie-title movie-genre movie-genre-a'>
								Adventure, Comedy,Family
							</p>
							<button className='btn btn-outline-danger btn-outline-danger-a'>
								Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export const UpcomingMoviesList = () => {
	return (
		<>
			<div className='row d-flex card-movie-list'>
				<div className='row container d-flex upcoming-movie-list'>
					<div className='col card card-upcoming-movie-list col-2'>
						<img className='image-card' src={BlackWidow} alt='' />
						<p className='movie-title'>Black Widow</p>
						<p className='movie-title movie-genre'>Action,Adventure,Sci-Fi</p>
						<button className='btn btn-outline-danger'>Details</button>
					</div>

					<div className='col card card-upcoming-movie-list  margin-card col-2 '>
						<img className='image-card' src={TheWitches} alt='' />
						<p className='movie-title'>The Witches</p>
						<p className='movie-title movie-genre'>Adventure,Comedy,Family</p>
						<button className='btn btn-outline-danger'>Details</button>
					</div>

					<div className='col card card-upcoming-movie-list col-2 '>
						<img className='image-card' src={Tenet} alt='' />
						<p className='movie-title'>Tenet</p>
						<p className='movie-title movie-genre'>Action,Sci-Fi</p>
						<button className='btn btn-outline-danger'>Details</button>
					</div>

					<div className='col card card-upcoming-movie-list margin-card col-2'>
						<img className='image-card' src={BlackWidow} alt='' />
						<p className='movie-title'>Black Widow</p>
						<p className='movie-title movie-genre'>Action,Adventure,Sci-Fi</p>
						<button className='btn btn-outline-danger'>Details</button>
					</div>

					<div className='col card card-upcoming-movie-list col-2 '>
						<img className='image-card' src={TheWitches} alt='' />
						<p className='movie-title'>The Witches</p>
						<p className='movie-title movie-genre'>Adventure,Comedy,Family</p>
						<button className='btn btn-outline-danger'>Details</button>
					</div>
				</div>
			</div>
		</>
	);
};
export const NowShowingMoviesListResponsive = () => {
	return (
		<>
			<div className='overflow-auto'>
				<div className='row d-flex card-movie-list card-movie-list-a '>
					<div className='row container d-flex upcoming-movie-list  '>
						<div className='col card border-white col-2 upcoming-movie-list-a'>
							<img className='image-card' src={Spiderman} alt='' />
						</div>
						<div className='col card border-white  margin-card col-2 upcoming-movie-list-a'>
							<img className='image-card' src={TheLionKing} alt='' />
						</div>
						<div className='col card border-white col-2 upcoming-movie-list-a'>
							<img className='image-card' src={JohnWick} alt='' />
						</div>
						<div className='col card border-white margin-card col-2 upcoming-movie-list-a'>
							<img className='image-card' src={Spiderman} alt='' />
						</div>
						<div className='col card border-white col-2 upcoming-movie-list-a'>
							<img className='image-card' src={TheLionKing} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
