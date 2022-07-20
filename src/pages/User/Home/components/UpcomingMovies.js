/** @format */
import { MonthList, MonthListResponsive } from './MonthList';
import { EmailType, EmailTypeResponsive } from './EmailType';
import {
	UpcomingMoviesList,
	UpcomingMoviesListResponsive,
} from './MovieList V1.';
import { UpcomingMoviesWord, UpcomingMoviesWordResponsive } from './Word';
import './component.css';
const UpcomingMovies = () => {
	return (
		<>
			{/* <!-- CONTENT KE -3 -->*/}
			{/*<!--RESPONSIVE --> */}
			<div className='container-fluid upcoming-movies width-a upcoming-movies-a'>
				<UpcomingMoviesWordResponsive />
				<MonthListResponsive />
				<UpcomingMoviesListResponsive />
				<EmailTypeResponsive />
			</div>
			{/* <!-- Main --> */}
			<div className='container-fluid upcoming-movies width-main'>
				<UpcomingMoviesWord />
				<MonthList />
				<UpcomingMoviesList />
				<EmailType />
			</div>
		</>
	);
};

export default UpcomingMovies;
