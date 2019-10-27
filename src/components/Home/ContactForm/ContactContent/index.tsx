import React from 'react';

import './styles.css';

type ccProps = {
	icon: string;
	title: string;
	content: string;
};

const ContactContent = ({ icon, title, content }: ccProps) => {
	return (
		<div className="contact-content">
			<div className="contact-icon">
				<i className={'ion-' + icon}></i>
			</div>
			<div className="contact-details">
				<h5>{title}</h5>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default ContactContent;
