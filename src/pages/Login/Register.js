/** @format */

import './Auth.css';
import { BackgroundUngu, Tickitz } from '../../components/Asset/Picture Asset';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
	let navigate = useNavigate();
	const [RegisterData, setRegisterData] = useState({
		email: '',
		password: '',
		confirmpassword: '',
	});

	const handleRegister = async (e) => {
		e.preventDefault();
		if (RegisterData.email == '' || RegisterData.password == '') {
			alert('Fields Cannot Be Empty');
		} else if (RegisterData.password != RegisterData.confirmpassword) {
			alert('Password Not Match');
		} else {
			try {
				console.log(RegisterData);
				const result = await axios({
					method: 'POST',
					data: RegisterData,
					url: 'http://localhost:3001/api/v1/account',
				});

				if (result.data.email) {
					console.log(result.data);
					alert(result.data.message);
					navigate('/Login', { replace: true });
				} else {
					console.log(result.data.message);
					alert(result.data.message);
				}
			} catch (error) {
				console.log(error.response);
				alert(error.response.data.message);
			}
		}
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
