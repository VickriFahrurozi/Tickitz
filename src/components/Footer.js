/** @format */
import {
	NavbarLogo,
	Ebu,
	Hiflix,
	CineOne,
	Facebook,
	Instagram,
	Twitter,
	Youtube,
} from './Asset/Picture Asset';
export const Footer = () => {
	return (
		<>
			{/* <!-- //FOOTER -->
        <!-- FOOTER RESPONSIVE --> */}
			<footer className='container-fluid row footer  width-a footer-a bg-white'>
				<div className='row footer-content d-flex'>
					<div className='card row footer-content-1'>
						<img
							className='footer-logo footer-logo-a'
							src={NavbarLogo}
							alt=''
						/>
						<text className='footer-text-1 footer-text-1-a'>
							Stop waiting in line. Buy tickets conveniently, watch movies
							quietly.
						</text>
					</div>
					<div className='card row footer-content-2'>
						<div className='row footer-text-2 footer-text-2-a'>Explore</div>
						<div className='row d-flex footer-text-2-2'>
							<div className='col-3 text-footer-a'>
								<text>Home</text>
							</div>
							<div className='col-6 text-footer-a'>
								<text> List Movie</text>
							</div>
						</div>
					</div>
					<div className='row footer-text-2 footer-text-2-a'>Our Sponsor</div>
					<div className='card row  footer-content-3 footer-content-3-a'>
						<div className=' col our-sponsor d-flex our-sponsor-a'>
							<div className='col our-sponsor-1 our-sponsor-1-a'>
								<img src={Ebu} alt='' />
							</div>
							<div className='col our-sponsor-2 our-sponsor-2-a'>
								<img src={CineOne} alt='' />
							</div>
							<div className='col our-sponsor-3 our-sponsor-3-a'>
								<img src={Hiflix} alt='' />
							</div>
						</div>
					</div>
					<div className='card col-3  footer-content-4'>
						<div className='row footer-text-3 footer-text-2-a-a'>Follow Us</div>
						<div className='  our-sponsor d-flex'>
							<div className='col follow-us-1 follow-us-1-a'>
								<img src={Facebook} alt='' />
							</div>
							<div className='col follow-us-2'>
								<img src={Instagram} alt='' />
							</div>
							<div className='col follow-us-3 '>
								<img src={Twitter} alt='' />
							</div>
							<div className='col follow-us-4'>
								<img src={Youtube} alt='' />
							</div>
						</div>
					</div>
				</div>
			</footer>
			;{/* <!-- FOOTER RESPONSIVE --> */}
			<footer className='container-fluid row footer bg-white width-main bg-info'>
				<div className='col footer-content d-flex'>
					<div className='card col-4 footer-content-1'>
						<img className='footer-logo' src={NavbarLogo} alt='' />
						<text className='footer-text-1'>
							Stop waiting in line. Buy tickets conveniently, watch movies
							quietly.
						</text>
					</div>
					<div className='card col-2 footer-content-2'>
						<div className='row footer-text-2'>Explore</div>
						<div className='row footer-text-2-2'>
							<p>Home</p>
							<p> List Movie</p>
						</div>
					</div>
					<div className='card col-3  footer-content-3'>
						<div className='row footer-text-2'>Our Sponsor</div>
						<div className=' row our-sponsor'>
							<div className='our-sponsor-1'>
								<img src={Ebu} alt='' />
							</div>
							<div className='our-sponsor-2'>
								<img src={CineOne} alt='' />
							</div>
							<div className='our-sponsor-3'>
								<img src={Hiflix} alt='' />
							</div>
						</div>
					</div>
					<div className='card col-3  footer-content-4'>
						<div className='row footer-text-3'>Follow Us</div>
						<div className=' row our-sponsor'>
							<div className='follow-us-1 d-flex'>
								<img className='col-2' src={Facebook} alt='' />
								<text className='social-media'>Tickitz Cinema id</text>
							</div>
							<div className='follow-us-2 d-flex'>
								<img className='col-2' src={Instagram} alt='' />
								<text className='social-media'>Tickitz.id</text>
							</div>
							<div className='follow-us-3 d-flex'>
								<img className='col-2' src={Twitter} alt='' />
								<text className='social-media'>Tickitz.id</text>
							</div>
							<div className='follow-us-4 d-flex'>
								<img className='col-2' src={Youtube} alt='' />
								<text className='social-media'>Tickitz Cinema id</text>
							</div>
						</div>
					</div>
				</div>
			</footer>
			;
		</>
	);
};
