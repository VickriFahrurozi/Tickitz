/** @format */
import { NowShowingMoviesListResponsive } from './MovieList V1.';
import { NowShowingWord, NowShowingWordResponsive } from './Word';
import { NowShowingMoviesList } from './MovieList';
import './component.css';
const NowShowing = () => {
	return (
		<>
			{/* <!-- CONTENT KE-2 --> */}
			{/*<!--RESPONSIVE-->  */}
			<div className='container-fluid now-showing width-a now-showing-a '>
				<NowShowingWordResponsive />
				<NowShowingMoviesListResponsive />
			</div>
			{/* <!-- Main-->  */}
			<div className='container-fluid now-showing width-main'>
				<NowShowingWord />
				<NowShowingMoviesList />
			</div>
		</>
	);
};

export default NowShowing;
