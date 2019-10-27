import React from 'react';

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
