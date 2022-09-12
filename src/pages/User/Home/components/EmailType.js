/** @format */
import './component.css';
export const EmailType = () => {
	return (
		<>
			<div className='card row-cols movie-box shadow-lg'>
				<p className='movie-box-small-word'>Be The Vanguard Of The</p>
				<p className='movie-box-large-word'>Movie Goers</p>
				<div className='d-flex '>
					<div className='form-group email-join'>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Type Your Email'
						/>
					</div>
					<button className='btn btn-light join-now col-4'>Join Now</button>
				</div>
				<div className='card by-joining'>
					<text className='bottom-text'>
						By Joining You as a Tickitz member,
					</text>
					<text className='bottom-text-2'>
						we will always send you the latest update via email
					</text>
				</div>
			</div>
		</>
	);
};

export const EmailTypeResponsive = () => {
	return (
		<>
			<div className='email-type-responsive-a'>
				<div className=' row-cols shadow-lg width-a movie-box-a'>
					<div className='be-guard'>
						<p className='movie-box-small-word movie-box-small-word-a '>
							Be The Vanguard Of The
						</p>
						<p className='movie-box-large-word movie-box-large-word-a'>
							Moviegoers
						</p>
					</div>
					<div className=''>
						<div className='form-group email-join email-join-a'>
							<input
								type='email'
								className='form-control form-control-a'
								id='exampleInputEmail1'
								aria-describedby='emailHelp'
								placeholder='Type Your Email'
							/>
						</div>
						<button className='btn btn-light join-now col-4 form-control-a-a'>
							Join Now
						</button>
					</div>
					<div className='card by-joining by-joining-a'>
						<text className='bottom-text bottom-text-a'>
							By Joining You as a Tickitz member,
						</text>
						<text className='bottom-text-2 bottom-text-a'>
							we will always send you the
						</text>
						<text className='bottom-text-a'> latest update via email</text>
					</div>
				</div>
			</div>
		</>
	);
};
