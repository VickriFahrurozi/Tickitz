/** @format */
const initialState = {
	loading: false,
	data: {
		message: null,
		ID: null,
		token: null,
		role: null,
	},
	error: '',
};

const initialStateRegister = {
	loading: false,
	data: {
		message: null,
		status: null,
		email: null,
		password: null,
		hash: null,
	},
	error: null,
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
		case 'AUTH_LOGOUT':
			return { loading: false, data: '', error: '' };
		default:
			return state;
	}
};

const fetchRegister = (state = initialStateRegister, action = {}) => {
	switch (action.type) {
		case 'REGISTER_REQUEST':
			return { ...state, loading: true };
		case 'REGISTER_ERROR':
			alert(action.payload.data.message);
			return {
				...state,
				loading: false,
				data: state.data,
				error: action.payload,
			};
		case 'REGISTER_SUCCESS':
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

export { fetch, fetchRegister };
//ALKSDA
