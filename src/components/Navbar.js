/** @format */
import { NavbarLogo } from './Asset/Picture Asset';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLogout } from '../redux/actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../pages/User/Home/home.css';
export const Navbar = () => {
	const data = useSelector((state) => state.auth);
	let dispatch = useDispatch();
	let navigate = useNavigate();
	const handlelogout = () => {
		localStorage.removeItem('AccountData');
		dispatch(AuthLogout());
		// navigate('/Login', { replace: true });
		window.location.reload();
	};

	return (
		<>
			<nav className='navbar navbar-expand-lg '>
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
							<li className='nav-item home '>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/User/Home'}>Home</Link>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/ListMovie'}>List Movie</Link>
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
							Logout
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export const NavbarGuest = () => {
	let navigate = useNavigate();

	return (
		<>
			{/* <!-- NAVIGATION BAR --> */}
			<nav className='navbar navbar-expand-lg  navbar-responsive '>
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
							<li className='nav-item home '>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/User/Home'}>Home</Link>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link nav-font' href='#'>
									<Link to={'/ListMovie'}>List Movie</Link>
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
							onClick={() => {
								navigate('/Login', { replace: true });
							}}
						>
							Sign In YOK
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};
