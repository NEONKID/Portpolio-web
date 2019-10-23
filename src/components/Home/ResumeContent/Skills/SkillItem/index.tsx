import React from 'react';

import './styles.css';

type skillProps = {
	name: string;
	year: number;
};

const SkillItem = ({ name, year }: skillProps) => {
	const yearComment =
		year > 1 ? year + ' years experience' : year + ' year experience';

	return (
		<label className="progress-bar-label">
			{name} - <span>{yearComment}</span>
		</label>
	);
};

export default SkillItem;
