/** @format */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import MainNavigation from './MainNavigation';
import configureStore from './redux/store';
import { store, persistor } from './redux/store'; //cara standar

//store.js = configure store = menghubungkan semua reducer , ditempat ini semua state ditampung
//actions =triggers , ada dispatch/action
//reducers = untuk conditional statement , error ,loading ,success

// const { store, persistor } = configureStore(); //CARA REDUXNYA
const App = () => {
	return (
		//Kalau tanpa redux persist langsung provider , ga pake persist gate
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<MainNavigation />
				</PersistGate>
			</Provider>
		</>
	);
};
export default App;
//SADSA
