import React from 'react';

import './styles.css';

type pbProps = {
	percentage: number;
};

const ProgressBar = ({ percentage }: pbProps) => {
	return (
		<div className="progress">
			<div
				className="progress-bar"
				role="progressbar"
				style={{ width: percentage + '%' }}
				aria-valuenow={percentage}
				aria-valuemin={0}
				aria-valuemax={100}
			>
				<span>{percentage}%</span>
			</div>
		</div>
	);
};

export default ProgressBar;
