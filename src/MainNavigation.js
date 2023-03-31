/** @format */
import Home from './pages/User/Home/Home';
import HomeGuest from './pages/User/Home/HomeGuest';
import ListMovie from './pages/User/List Movies/ListMovie';
import HomeAdmin from './pages/Admin/Home/HomeAdmin';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const MainNavigation = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomeGuest />} />
				<Route path='/User/Home' element={<Home />} />
				<Route path='/Admin/Home' element={<HomeAdmin />} />
				<Route path='/ListMovie' element={<ListMovie />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/Register' element={<Register />} />
			</Routes>
		</>
	);
};

export default MainNavigation;
