import React from 'react';

import ColInfo from './ColInfo';
import './styles.css';

const Profile = () => {
	return (
		<div className="block-content">
			<h3 className="block-title">Profile</h3>
			<h3 className="subheading">
				I'm a Back-end Developer. I aim to make a difference through my creative solution.
			</h3>
			<p>
				I worked with my colleagues on a project to develop a stable application. I aim to use my application in
				any situation.
			</p>
			<div className="info-list row">
				<ColInfo title="Name" content="Kwang Soo Jeong" />
				<ColInfo title="Date of birth" content="August 25, 1993" />
				<ColInfo title="E-mail" content="contact@neonkid.xyz" />
				<ColInfo title="Hangouts" content="@clax1412" />
			</div>
		</div>
	);
};

export default Profile;
