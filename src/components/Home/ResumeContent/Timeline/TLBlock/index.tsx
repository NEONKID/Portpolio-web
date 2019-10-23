import React from 'react';

import './styles.css';

type TLBProps = {
	category: string;
	name: string;
	pos: string;
	start: string;
	end: string;
	info: string;
};

const TLBlock = ({ category, name, pos, start, end, info }: TLBProps) => {
	let cName, pName;
	switch (category) {
		case 'experience':
			pName = <span>{pos}</span>;
			cName = ' @ ' + name;
			break;

		case 'education':
			pName = pos + ' | ';
			cName = <span>{name}</span>;
			break;
	}

	let wTime;
	switch (end) {
		case 'Present':
			wTime = <span className="current">Present</span>;
			break;

		default:
			wTime = end;
			break;
	}

	return (
		<div className="exp">
			<div className="hgroup">
				<h4>
					{pName} {cName}
				</h4>
				<h5>
					{start} - {wTime}
				</h5>
			</div>
			<p>{info}</p>
		</div>
	);
};

export default TLBlock;
