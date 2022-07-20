/** @format */
import axios from 'axios';
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
export const LoginAuth = (formData) => {
	return (dispatch) => {
		dispatch(loginRequest());
		axios({
			method: 'POST',
			data: {
				email: formData.email,
				password: formData.password,
			},
			url: `http://localhost:3001/api/v1/account/login`,
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
