import React from 'react';

import './styles.css';

type sdProps = {
	icon: string;
	title: string;
	content: string;
};

const ServiceDetails = ({ icon, title, content }: sdProps) => {
	return (
		<div className="col-md-4 col-md-6 service">
			<div className="service-icon">
				<i className={icon}></i>
			</div>
			<h4>{title}</h4>
			<p>{content}</p>
		</div>
	);
};

export default ServiceDetails;
