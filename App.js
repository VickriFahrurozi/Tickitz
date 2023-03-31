/** @format */

import React from 'react';
import logo from './logo.svg';
import LandingPage from './pages/LandingPage/LandingPage';
import Product from './pages/Product/Product';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './pages/LandingPage/Banner.css';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/product' element={<Product />} />
			</Routes>
		</>
	);
};

export default App;
