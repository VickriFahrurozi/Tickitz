/** @format */

import './Auth.css';
import { BackgroundUngu, Tickitz } from '../../components/Asset/Picture Asset';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterAuth } from '../../redux/actions/Auth';
const Register = () => {
	const data = useSelector((state) => state.authregister);
	const datalogin = useSelector((state) => state.auth);
	console.log(data.data.email, 'ini auth register');
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const [RegisterData, setRegisterData] = useState({
		email: '',
		password: '',
		confirmpassword: '',
		first_name: '',
		last_name: '',
		phone_number: '',
	});

	useEffect(() => {
		// if (datalogin.data.role == '222') {
		// 	navigate('/Login', { replace: true });
		// }
		// if (data.data.email == RegisterData.email) {
		// 	navigate('/Login', { replace: true });
		// }
	}, [RegisterData]);
	const handleRegister = () => {
		dispatch(RegisterAuth(RegisterData));
	};
	return (
		<>
			<div className='container-fluid row main Auth-main '>
				<div className=' col content-left Auth-left'>
					<img src={BackgroundUngu} alt='' width={'cover'} />
					<img className='logo Auth-logo' src={Tickitz} alt='' />
					<p className='text Auth-text'>Wait,Watch,Wow !</p>
				</div>
				<div className='col content-right Auth-right'>
					<div className='login-word text-align Auth'>
						<p className='sign-up Auth-sign-up'> Sign Up</p>
						<p className='fill-details'>Fill The Data Below</p>
					</div>
					<div>
						<p className='first-name text-align'>Email</p>
						<div className='Auth-field pb-3'>
							<input
								className=' card inputfields col-12'
								type='email'
								placeholder='Input Your Email'
								onChange={(e) => {
									setRegisterData((prevState) => ({
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
								onChange={(e) => {
									setRegisterData((prevState) => ({
										...prevState,
										password: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div>
						<p className='first-name text-align'>Confirm Password</p>
						<div className='Auth-field pb-4'>
							<input
								className=' card inputfields col-12'
								type='password'
								placeholder='Re-Type Your Password'
								onChange={(e) => {
									setRegisterData((prevState) => ({
										...prevState,
										confirmpassword: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div>
						<p className='first-name text-align'>First Name</p>
						<div className='Auth-field pb-3'>
							<input
								className=' card inputfields col-12'
								type='text'
								placeholder='Input Your First Name'
								onChange={(e) => {
									setRegisterData((prevState) => ({
										...prevState,
										first_name: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div>
						<p className='first-name text-align'>Last Name</p>
						<div className='Auth-field pb-3'>
							<input
								className=' card inputfields col-12'
								type='text'
								placeholder='Input Your Last Name'
								onChange={(e) => {
									setRegisterData((prevState) => ({
										...prevState,
										last_name: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div>
						<p className='first-name text-align'>Phone Number</p>
						<div className='Auth-field pb-3'>
							<input
								className=' card inputfields col-12'
								type='number'
								placeholder='Input Your Phone Number'
								onChange={(e) => {
									setRegisterData((prevState) => ({
										...prevState,
										phone_number: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<button
						className='btn btn-primary col-9 sign-in-up-button'
						onClick={(e) => {
							handleRegister(e);
						}}
					>
						Sign In
					</button>

					<div>
						<p className='account sign-in-2 '>
							Already Have an Account ?
							<text className='sign-in '>
								{' '}
								<Link to={'/Login'}>Login</Link>
							</text>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
