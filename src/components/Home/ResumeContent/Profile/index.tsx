import React from 'react';
import { Translation } from 'react-i18next';

import ColInfo from './ColInfo';
import './styles.css';

const Profile = () => {
	return (
		<Translation>
			{(t, { i18n, lng }, ready) => (
				<div className="block-content">
					<h3 className="block-title">Profile</h3>
					<h3 className="subheading">{t('intro-title')}</h3>
					<p>{t('intro-desc')}</p>
					<div className="info-list row">
						<ColInfo title={t('name-title')} content={t('name')} />
						<ColInfo title={t('birth-title')} content={t('birth')} />
						<ColInfo title={t('email-title')} content="contact@neonkid.xyz" />
						<ColInfo title="Skype" content="@clax1412" />
					</div>
				</div>
			)}
		</Translation>
	);
};

export default Profile;
