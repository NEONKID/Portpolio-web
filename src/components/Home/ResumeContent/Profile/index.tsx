import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import ColInfo from './ColInfo';
import './styles.css';

const Profile = injectIntl(({ intl }) => {
	return (
		<div className="block-content">
			<h3 className="block-title">Profile</h3>
			<h3 className="subheading">
				<FormattedMessage id="intro-title" />
			</h3>
			<p>
				<FormattedMessage id="intro-desc" />
			</p>
			<div className="info-list row">
				<ColInfo
					title={intl.formatMessage({ id: 'name-title' })}
					content={intl.formatMessage({ id: 'name' })}
				/>
				<ColInfo
					title={intl.formatMessage({ id: 'birth-title' })}
					content={intl.formatMessage({ id: 'birth' })}
				/>
				<ColInfo title={intl.formatMessage({ id: 'email-title' })} content="contact@neonkid.xyz" />
				<ColInfo title="Skype" content="@clax1412" />
			</div>
		</div>
	);
});

export default Profile;
