/** @format */
import './component.css';

export const NowShowingWord = () => {
	return (
		<>
			<div className='upcoming-movies-word-list'>
				<div className='d-flex justify-content-between'>
					<div className='col'>
						<p className='now-showing-word'>Now Showing</p>
						<div className='purple-line'></div>
					</div>
					<p className='view-all-word'>View All</p>
				</div>
			</div>
		</>
	);
};
export const NowShowingWordResponsive = () => {
	return (
		<>
			<div className='upcoming-movies-word-list upcoming-movies-word-list-a'>
				<div className='d-flex justify-content-between'>
					<div className='col'>
						<p className='now-showing-word now-showing-word-a'>Now Showing</p>
					</div>
					<p className='view-all-word view-all-word-a'>View All</p>
				</div>
			</div>
		</>
	);
};
export const UpcomingMoviesWord = () => {
	return (
		<>
			<div className='upcoming-movies-word-list'>
				<div className='d-flex justify-content-between'>
					<div className='col'>
						<p className='upcoming-movies-word'>Upcoming Movies</p>
					</div>
					<p className='view-all-word'>View All</p>
				</div>
			</div>
		</>
	);
};
export const UpcomingMoviesWordResponsive = () => {
	return (
		<>
			<div className='upcoming-movies-word-list'>
				<div className='d-flex justify-content-between'>
					<div className='col'>
						<p className='upcoming-movies-word upcoming-movies-word-a'>
							Upcoming Movies
						</p>
					</div>
					<p className='view-all-word view-all-word-a'>View All</p>
				</div>
			</div>
		</>
	);
};
