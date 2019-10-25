import React from 'react';

import ServiceDetails from './ServiceDetails';

import './styles.css';

const Services = () => {
	const serviceList = [
		{
			icon: 'ion-laptop',
			title: 'Web Design',
			content:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
		},
	];

	return (
		<div className="block-content">
			<h3 className="block-title">Services</h3>
			<div className="row">
				{serviceList.map((service, i) => {
					return (
						<ServiceDetails icon={service.icon} title={service.title} content={service.content} key={i} />
					);
				})}
			</div>
		</div>
	);
};

export default Services;
