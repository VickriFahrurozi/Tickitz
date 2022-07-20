/** @format */

import { act } from 'react-dom/test-utils';
import { Auth } from '../actions/Movies';

const initialState = {
	loading: false,
	data: {
		message: null,
		ID: null,
		token: null,
		role: null,
	},
};

const fetch = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return { ...state, loading: true };
		case 'LOGIN_ERROR':
			alert(action.payload);
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'LOGIN_SUCCESS':
			alert(action.payload.message);
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			};

		default:
			return state;
	}
};

export default fetch;
//ALKSDA
