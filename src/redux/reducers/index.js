/** @format */
import { combineReducers } from 'redux';
import Movies from '../reducers/Movies';
import { fetch, fetchRegister } from '../reducers/Auth';
const rootReducer = combineReducers({
	movies: Movies,
	auth: fetch,
	authregister: fetchRegister,
});

export default rootReducer;
//TES COMMENTAR
