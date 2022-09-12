/** @format */
import { useEffect } from 'react';
import { NavbarGuest } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import BannerHome from './components/BannerHome';
import NowShowing from './components/NowShowing';
import UpcomingMovies from './components/UpcomingMovies';
import './home.css';

const HomeGuest = () => {
	useEffect(() => {
		document.title = 'Ticktitz : Home';
	});
	return (
		<>
			<NavbarGuest />
			<BannerHome />
			<NowShowing />

			<UpcomingMovies />

			<Footer />
		</>
	);
};

export default HomeGuest;
