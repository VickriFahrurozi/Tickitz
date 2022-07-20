/** @format */

export const Loading = () => {
	return (
		<>
			<div>Loading...............</div>
		</>
	);
};

export const EmptyState = ({ title = 'No Data Found' }) => {
	return (
		<>
			<div>{title}</div>
		</>
	);
};
