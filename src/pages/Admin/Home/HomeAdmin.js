/** @format */
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavbarAdmin from '../../../components/Navbar Admin';
import { AdminNowShowing } from './components/AdminNowShowing';
import { Footer } from '../../../components/Footer';
import BannerHome from '../../User/Home/components/BannerHome';
import { useState } from 'react';
import { Loading } from '../../../components/Loading';
const HomeAdmin = () => {
	let navigate = useNavigate();
	const [UserLogin, setUserLogin] = useState({
		islogin: false,
		loading: true,
		ID: '',
	});
	useEffect(() => {
		document.title = 'Ticktitz : Admin Home';

		if (localStorage.getItem('AccountData')) {
			setUserLogin((prevData) => ({
				...prevData,
				islogin: true,
				loading: false,
				ID: JSON.parse(localStorage.getItem('AccountData')) ?? {},
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
							<NavbarAdmin Nama={UserLogin.ID.data.ID} />
							<AdminNowShowing />
						</>
					)}
				</>
			)}
		</>
	);
};

export default HomeAdmin;
