import React from 'react';

import Timeline from '../Timeline';

import './styles.css';

const Education = () => {
	const edu = require('./edu.json');

	return (
		<div className="block-content">
			<h3 className="block-title">Education</h3>
			<Timeline category="education" details={edu} />
		</div>
	);
};

export default Education;
