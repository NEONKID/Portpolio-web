import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.css';

interface skillProps {
	name: string;
	year: number;
}

const SkillItem = ({ name, year }: skillProps) => {
	const { t } = useTranslation();
	const yearComment = year > 1 ? year + t('exp-years') : year + t('exp-year');

	return (
		<label className="progress-bar-label">
			{name} - <span>{yearComment}</span>
		</label>
	);
};

export default SkillItem;
