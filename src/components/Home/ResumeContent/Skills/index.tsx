import React from 'react';

import ProgressBar from './ProgressBar';
import SkillItem from './SkillItem';

const Skills = () => {
	return (
		<div className="block-content">
			<h3 className="block-title">Skills</h3>
			<SkillItem name="Linux" year={5} />
			<ProgressBar percentage={75} />
			<SkillItem name="Java" year={3} />
			<ProgressBar percentage={50} />
			<SkillItem name="Python" year={2} />
			<ProgressBar percentage={35} />
			<SkillItem name="Microsoft SQL Server" year={1} />
			<ProgressBar percentage={25} />
			<SkillItem name="R" year={1} />
			<ProgressBar percentage={15} />
		</div>
	);
};

export default Skills;
