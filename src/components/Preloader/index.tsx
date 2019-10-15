import React from 'react';

import './styles.css';

const Preloader = () => {
	const noneDp = {
		display: 'none',
	};

	return (
		<div className="preloader" style={noneDp}>
			<div className="anim pulse">
				<i className="ion-ios-bolt-outline"></i>
			</div>
		</div>
	);
};

export default Preloader;
