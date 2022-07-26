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
			url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/Movies/nowshowing/?limit=100&page=1`,
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
															className='col card border-white margin-card col-2 justify-content-center align-items-center'
															key={index}
														>
															<p className='h5 mt-4'>{item.title}</p>
															<img
																className='image-card -now-showing'
																src={`https://walrus-app-req5v.ondigitalocean.app/uploads/${item.cover}`}
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
