/** @format */
import './component.css';
export const MonthList = () => {
	return (
		<>
			<div className='row'>
				<div className=' col overflow-auto'>
					<div className='col month-list  d-flex'>
						<button className='btn btn-outline-primary upcoming-month col-1 active-month shadow'>
							September
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							October
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							November
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							December
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							January
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							February
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							March
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							April
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							May
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							June
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							July
						</button>
						<button className='btn btn-outline-primary upcoming-month col-1'>
							August
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export const MonthListResponsive = () => {
	return (
		<>
			<div className='row d-flex justify-content-between'>
				<div className='row container  month-list d-flex month-list-a'>
					<div className='overflow-auto d-flex'>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col active-month shadow'>
								September
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								October
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								November
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								December
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								January
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								February
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								March
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								April
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								May
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								June
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								July
							</button>
						</div>
						<div className='col col-month-list-a'>
							<button className='btn btn-outline-primary upcoming-month upcoming-month-a col'>
								August
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
