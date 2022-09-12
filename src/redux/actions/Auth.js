/** @format */
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const loginRequest = () => {
	return {
		type: 'LOGIN_REQUEST',
	};
};
const loginSuccess = (data) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: data,
	};
};
const loginError = (error) => {
	return {
		type: 'LOGIN_ERROR',
		payload: error,
	};
};
const registerRequest = () => {
	return {
		type: 'REGISTER_REQUEST',
	};
};
const registerSuccess = (data) => {
	return {
		type: 'REGISTER_SUCCESS',
		payload: data,
	};
};
const registerError = (error) => {
	return {
		type: 'REGISTER_ERROR',
		payload: error,
	};
};
export const LoginAuth = (formData) => {
	return (dispatch) => {
		dispatch(loginRequest());
		axios({
			method: 'POST',
			data: {
				email: formData.email,
				password: formData.password,
			},
			url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/account/login`,
		})
			.then((res) => {
				if (res.data.ID) {
					dispatch(loginSuccess(res.data));
				} else {
					dispatch(loginError(res.data.message));
				}
			})
			.catch((err) => {
				dispatch(loginError(err.response));
			});
	};
};

export const RegisterAuth = (formdata) => {
	return (dispatch) => {
		dispatch(registerRequest());
		axios({
			method: 'POST',
			data: {
				email: formdata.email,
				password: formdata.password,
				confirmpassword: formdata.confirmpassword,
				first_name: formdata.first_name,
				last_name: formdata.last_name,
				phone_number: formdata.phone_number,
			},
			url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/account`,
		})
			.then((res) => {
				if (res.data.email) {
					dispatch(registerSuccess(res.data));
				} else {
					alert(res.data.message);
					dispatch(registerError(res.data.message));
				}
			})
			.catch((err) => {
				dispatch(registerError(err.response));
			});
	};
};

export const AuthLogout = () => {
	return {
		type: 'AUTH_LOGOUT',
	};
};