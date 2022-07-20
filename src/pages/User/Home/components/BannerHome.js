/** @format */
import { Gambar3Film } from '../../../../components/Asset/Picture Asset';
import './component.css';

const BannerHomeMain = () => {
	return (
		<>
			<div className='container-fluid threepicture width-main'>
				<div className='row'>
					<div className='col content-left '>
						<div className='word'>
							<span className='content-left nearest-cinema '>
								Nearest Cinema,Newest Movie,
							</span>
							<p className='content-left find-out-now'>
								<span>Find Out Now!</span>
							</p>
						</div>
					</div>
					<div className='col content-right'>
						<img src={Gambar3Film} alt='' />
					</div>
				</div>
			</div>
		</>
	);
};
const BannerHomeResponsive = () => {
	return (
		<>
			<div className='container-fluid threepicture width-a'>
				<div className='row'>
					<div className='row content-left content-left-a '>
						<div className='word'>
							<span className='content-left nearest-cinema nearest-cinema-a '>
								Nearest Cinema,Newest Movie,
							</span>
							<p className='content-left find-out-now'>
								<span>Find out now!</span>
							</p>
						</div>
					</div>
					<div className='row content-right content-right-a'>
						<img src={Gambar3Film} alt='' />
					</div>
				</div>
			</div>
			;
		</>
	);
};

const BannerHome = () => {
	return (
		<>
			{/* <!-- CONTENT KE-1 --> */}
			{/* <!-- RESPONSIVE--> */}
			<BannerHomeResponsive />
			{/* <!-- Main --> */}
			<BannerHomeMain />
		</>
	);
};

export default BannerHome;
