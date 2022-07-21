/** @format */
import { NavbarLogo } from './Asset/Picture Asset';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useEffect } from 'react';
import { useState } from 'react';
const NavbarAdmin = ({ Nama = 'ASD' }) => {
	let navigate = useNavigate();
	const [Refetch, setRefefetch] = useState(false);
	const handlelogout = () => {
		localStorage.removeItem('AccountData');
		// navigate('/Login', { replace: true });
		window.location.reload();
	};
	//Tes github
	useEffect(() => {}, [Refetch]);
	return (
		<>
			{/* <!-- NAVIGATION BAR --> */}

			<nav className='navbar navbar-expand-lg bg-white'>
				<div className='container-fluid'>
					<img className='image-logo-navbar' src={NavbarLogo} alt='' />
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0 nav-font-style'>
							<li className='nav-item  home'>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/Admin/Home'}>Movies</Link>
								</a>
							</li>
							<li className='nav-item scheduled'>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/Admin/Home'}>Scheduled</Link>
								</a>
							</li>
							<li className='nav-item scheduled'>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/Admin/Home'}> Cinema</Link>
								</a>
							</li>
							<li>
								<a className='nav-link nav-font width-a' href='#'>
									Sign In
								</a>
							</li>
							<li>
								<p className='width-a copyright-a '>
									#169 2020 Tickitz. All Rights Reserved.
								</p>
							</li>
						</ul>
						<button
							className='btn btn-white btn-sign-up width-main'
							type='submit'
							onClick={(e) => {
								handlelogout(e);
							}}
						>
							{Nama}
						</button>
						<button
							className='btn btn-white btn-sign-up width-main'
							type='submit'
							onClick={(e) => {
								handlelogout(e);
								setRefefetch(!Refetch);
							}}
						>
							Log Out
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavbarAdmin;
