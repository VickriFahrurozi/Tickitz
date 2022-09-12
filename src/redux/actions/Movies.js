/** @format */
import axios from 'axios';
const getMoviesRequest = () => {
	return {
		type: 'GET_MOVIES_REQUEST',
	};
};
const getMoviesSuccess = (data) => {
	return {
		type: 'GET_MOVIES_SUCCESS',
		payload: data,
	};
};
const getMoviesError = (error) => {
	return {
		type: 'GET_MOVIES_ERROR',
		payload: error,
	};
};
const addMoviesRequest = () => {
	return {
		type: 'ADD_MOVIES_REQUEST',
	};
};
const addMoviesSuccess = (data) => {
	return {
		type: 'ADD_MOVIES_SUCCESS',
		payload: data,
	};
};
const addMoviesError = (error) => {
	return {
		type: 'ADD_MOVIES_ERROR',
		payload: error,
	};
};

export const getMovies = (limit = 10, page = 1) => {
	return (dispatch) => {
		dispatch(getMoviesRequest()); //PAKE THEN CATCH
		axios({
			method: 'GET',
			url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/movies/?limit=${limit}&page=${page}`,
		})
			.then((res) => {
				//success
				dispatch(getMoviesSuccess(res.data));
			})
			.catch((err) => {
				dispatch(getMoviesError(err.response));
			});
	};
};
export const addMovies = (data, token) => {
	return (dispatch) => {
		dispatch(addMoviesRequest()); //PAKE THEN CATCH
		axios({
			method: 'POST',
			data: data,
			url: `https://walrus-app-req5v.ondigitalocean.app/api/v1/movies/`,
			headers: {
				token: token,
			},
		})
			.then((res) => {
				if (res.data.status == 200) {
					dispatch(addMoviesSuccess(res.data));
				} else {
					dispatch(addMoviesError(res.data.data.message));
				}
			})
			.catch((err) => {
				dispatch(addMoviesError(err.response.data.message));
			});
	};
};
