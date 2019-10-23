import React from 'react';

import './styles.css';

type awProps = {
	img: string;
};

const Award = ({ img }: awProps) => {
	return (
		<div className="col-md-3 col-sm-6 awards">
			<img src={img} alt="" />
		</div>
	);
};

export default Award;
