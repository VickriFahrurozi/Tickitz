/** @format */

import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Auth.css';
import { BackgroundUngu, Tickitz } from '../../components/Asset/Picture Asset';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loading } from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth } from '../../redux/actions/Auth';

const Login = () => {
	let navigate = useNavigate();
	let dispatch = useDispatch();
	const { loading, data, error } = useSelector(
		(indexreducer) => indexreducer.auth
	);

	const [LoginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const [UserLogin, setUserLogin] = useState({
		islogin: false,
		role: '',
		loading: true,
	});
	useEffect(() => {
		document.title = 'Ticktitz : Login';
		if (data.ID) {
			localStorage.setItem(
				'AccountData',
				JSON.stringify({
					islogin: true,
					data: data,
				}) ?? {}
			);

			if (data.role == 222) {
				navigate('/Admin/Home', { replace: true });
			} else {
				navigate('/User/Home', { replace: true });
			}
		}
		if (localStorage.getItem('AccountData')) {
			let convert = JSON.parse(localStorage.getItem('AccountData')) ?? {};
			axios({
				method: 'POST',
				url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/account/VerifyRole?token=${convert.data.token}`,
			})
				.then((res) => {
					if (res.data.role == 222) {
						setUserLogin((prevData) => ({
							...prevData,
							role: 222,
						}));
					} else if (res.data.role == 111) {
						setUserLogin((prevData) => ({
							...prevData,
							role: 111,
						}));
					}
				})
				.catch((err) => {
					console.log(err);
				});

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
	}, [loading, data, error]);

	const handlelogin = async (e) => {
		e.preventDefault();

		// try {
		// 	const result = await axios({
		// 		method: 'POST',
		// 		data: LoginData,
		// 		url: 'https://walrus-app-req5v.ondigitalocean.app/api/v1/account/login',
		// 	});

		// 	if (result.data.ID) {
		// 		localStorage.setItem(
		// 			'AccountData',
		// 			JSON.stringify({
		// 				islogin: true,
		// 				data: result.data,
		// 			}) ?? {}
		// 		),
		// 			window.confirm(result.data.message);
		// 		if (result.data.role == 222) {
		// 			navigate('/Admin/Home', { replace: true });
		// 		} else {
		// 			navigate('/User/Home', { replace: true });
		// 		}
		// 	} else {
		// 		console.log(result);
		// 		alert(result.data.message);
		// 	}
		// } catch (error) {
		// 	alert(error.response.data.message);
		// }
		dispatch(LoginAuth(LoginData));
	};

	return (
		<>
			{UserLogin.loading == true ? (
				<>
					<Loading />
				</>
			) : (
				<>
					{UserLogin.islogin == true && UserLogin.role == 222 ? (
						<>{navigate('/Admin/Home', { replace: true })}</>
					) : (
						<>
							{UserLogin.islogin == true && UserLogin.role == 111 ? (
								<>{navigate('/User/Home', { replace: true })}</>
							) : (
								<>
									<div className='container-fluid row main Auth-main '>
										<div className=' col content-left Auth-left'>
											<img src={BackgroundUngu} alt='' width={'cover'} />
											<img className='logo Auth-logo' src={Tickitz} alt='' />
											<p className='text Auth-text'>Wait,Watch,Wow !</p>
										</div>
										<div className='col content-right Auth-right'>
											<div className='login-word text-align Auth'>
												<p className='sign-up Auth-sign-up'> Sign In</p>
												<p className='fill-details'>
													Sign in with your data that you entered during your
													registration
												</p>
											</div>
											<div>
												<p className='first-name text-align'>Email</p>
												<div className='Auth-field pb-3'>
													<input
														className=' card inputfields col-12'
														type='email'
														placeholder='Input Your Email'
														required
														onChange={(e) => {
															setLoginData((prevState) => ({
																...prevState,
																email: e.target.value,
															}));
														}}
													/>
												</div>
											</div>
											<div>
												<p className='first-name text-align'>Password</p>
												<div className='Auth-field pb-4'>
													<input
														className=' card inputfields col-12'
														type='password'
														placeholder='Input Your Password'
														required
														onChange={(e) => {
															setLoginData((prevState) => ({
																...prevState,
																password: e.target.value,
															}));
														}}
													/>
												</div>
											</div>
											<button
												className='btn btn-primary col-9 sign-in-up-button'
												onClick={(e) => {
													handlelogin(e);
												}}
											>
												Sign In
											</button>

											<div>
												<p className='account text-bottom-auth '>
													Forgot Your Password ?
													<text className='sign-in'> Reset Now</text>
												</p>
												<p className='account sign-in-2 '>
													Don't Have an Account ?
													<text className='sign-in '>
														{' '}
														<Link to={'/Register'}>Sign Up</Link>
													</text>
												</p>
											</div>
										</div>
									</div>
								</>
							)}
						</>
					)}
				</>
			)}
		</>
	);
};

export default Login;
