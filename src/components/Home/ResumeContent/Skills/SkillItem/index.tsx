import React from 'react';
import { injectIntl, WrappedComponentProps, IntlFormatters } from 'react-intl';

import './styles.css';

interface skillProps {
	name: string;
	year: number;
	intl?: IntlFormatters;
}

const SkillItem = ({ name, year, intl }: skillProps & WrappedComponentProps) => {
	const yearComment =
		year > 1 ? year + intl.formatMessage({ id: 'exp-years' }) : year + intl.formatMessage({ id: 'exp-year' });

	return (
		<label className="progress-bar-label">
			{name} - <span>{yearComment}</span>
		</label>
	);
};

export default injectIntl(SkillItem);
