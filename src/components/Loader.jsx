import React from 'react';

function Loader(props) {
	return (
		<div className='text-center'>
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
}

export default Loader;