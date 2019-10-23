import React from 'react';

import Timeline from '../Timeline';
import './styles.css';

const Experience = () => {
	const exp = require('./exp.json');

	return (
		<div className="block-content">
			<h3 className="block-title">Experience</h3>
			<Timeline category="experience" details={exp} />
		</div>
	);
};

export default Experience;
