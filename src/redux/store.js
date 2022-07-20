/** @format */
//Configure Store
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
//kalau react native pake async storage, Semua state di persist ditampung di local storage
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk, logger)); // CARA STANDAR
let persistor = persistStore(store);
export { store, persistor };

// export default () => { // CARA REDUX NYA
//
// 	let store = createStore(persistedReducer);
// 	let persistor = persistStore(store);
// 	return { store, persistor };
// };

//Configure Store

//Tanpa Redux Persist

// import { createStore } from 'redux';
// import rootReducer from './reducers'\

// export default () =>{
// let store = createStore(rootReducer)
// return {store}

// }
