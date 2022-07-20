/** @format */

import { getMovies } from '../actions/Movies';

const initialState = {
	loading: false,
	data: {
		list: [],
		totalRow: '',
		totaldata: '',
		totalpage: '',
	},
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_MOVIES_REQUEST':
			return { ...state, loading: true };
		case 'GET_MOVIES_ERROR':
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'GET_MOVIES_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			};
		case 'ADD_MOVIES_REQUEST':
			return { ...state, loading: true };
		case 'ADD_MOVIES_ERROR':
			alert(action.payload);
			return { ...state, loading: false, data: {}, error: action.payload };
		case 'ADD_MOVIES_SUCCESS':
			alert(action.payload.message);
			return {
				...state,
				loading: false,
				data: action.payload,
				error: '',
			};

		default:
			return state;
	}
};

export default fetch;
