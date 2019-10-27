import React from 'react';
import Moment from 'react-moment';

import './styles.css';

type TLBProps = {
	category: string;
	name: string;
	pos: string;
	start: string;
	end?: string;
	info: string;
};

const TLBlock = ({ category, name, pos, start, end, info }: TLBProps) => {
	let cName, pName, format;
	const locale = localStorage.getItem('locale');

	switch (category) {
		case 'experience':
			pName = <span>{pos}</span>;
			cName = ' @ ' + name;

			if (locale === 'ko') format = 'YYYY. MM. DD';
			else format = 'MMMM DD YYYY';

			break;

		case 'education':
			pName = pos + ' | ';
			cName = <span>{name}</span>;

			if (locale === 'ko') format = 'YYYY. MM';
			else format = 'MMMM YYYY';

			break;
	}

	let wTime;
	switch (end) {
		case null:
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
					<Moment format={format}>{start}</Moment> - <Moment format={format}>{wTime}</Moment>
				</h5>
			</div>
			<p>{info}</p>
		</div>
	);
};

export default TLBlock;
