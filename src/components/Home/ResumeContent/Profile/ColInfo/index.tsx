import React from 'react';

import './styles.css';

type infoProps = {
	title: string;
	content: string;
};

const ColInfo = ({ title, content }: infoProps) => {
	return (
		<div className="col-sm-6">
			<span>{title} : </span>
			{content}
		</div>
	);
};

export default ColInfo;
