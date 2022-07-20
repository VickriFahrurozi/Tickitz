/** @format */

import {
	NowShowingWordResponsive,
	NowShowingWord,
} from '../../../User/Home/components/Word';
import { AdminMovieList } from './AdminMovie List';
import './HomeAdmin.css';

export const AdminNowShowing = () => {
	return (
		<>
			<div className='container-fluid now-showing width-a now-showing-a '>
				<NowShowingWordResponsive />
			</div>
			<div className='container-fluid now-showing width-main'>
				<NowShowingWord />
				<AdminMovieList />
			</div>
		</>
	);
};
