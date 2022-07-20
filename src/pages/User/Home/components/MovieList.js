/** @format */
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './component.css';
import { Loading, EmptyState } from '../../../../components/Loading';

export const NowShowingMoviesList = () => {
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
			url: 'http://localhost:3001/api/v1/Movies/?limit=100&page=1',
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
					<div className='row d-flex card-movie-list'>
						<div className='row container d-flex upcoming-movie-list'>
							{!Movie.result.list.length ? (
								<EmptyState />
							) : (
								<div className='row'>
									<div className='col overflow-auto'>
										<div className=' col d-flex '>
											{Movie.result.list.map((item, index) => {
												//pake index sama key , kaitannya sama SEO
												return (
													<>
														<div
															className='col card border-white margin-card col-2'
															key={index}
														>
															<p className='movie_title'>{item.title}</p>
															<img
																className='image-card -now-showing'
																src={`http://localhost:3001/uploads/${item.cover}`}
																alt={item.title}
																title={item.title}
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
