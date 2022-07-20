/** @format */
import { useEffect } from 'react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import BannerHome from '../Home/components/BannerHome';
import NowShowing from '../Home/components/NowShowing';
import UpcomingMovies from '../Home/components/UpcomingMovies';
import { useState } from 'react';
import { Loading } from '../../../components/Loading';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
	let navigate = useNavigate();
	const [UserLogin, setUserLogin] = useState({
		islogin: false,
		loading: true,
	});
	useEffect(() => {
		document.title = 'Ticktitz : Admin Home';

		if (localStorage.getItem('AccountData')) {
			setUserLogin((prevData) => ({
				...prevData,
				islogin: true,
				loading: false,
			}));
		} else {
			setUserLogin((prevData) => ({
				...prevData,
				loading: false,
			}));
		}
	}, []);
	return (
		<>
			{UserLogin.loading == true ? (
				<>
					<Loading />
				</>
			) : (
				<>
					{UserLogin.islogin == false ? (
						<>{navigate('/Login', { replace: true })}</>
					) : (
						<>
							<Navbar />
							<BannerHome />
							<NowShowing />
							<UpcomingMovies />
							<Footer />
						</>
					)}
				</>
			)}
		</>
	);
};

export default Home;
