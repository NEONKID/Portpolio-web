import React, { useEffect, useState } from 'react';

import FB from '../../../Server';

import './styles.css';

type workProps = {
	category: string;
	img: string;
	title: string;
	caption: string;
	fileName: string;
};

const Work = ({ category, img, title, caption, fileName }: workProps) => {
	const [wall, setWall] = useState('');
	const [contentUrl, setContentUrl] = useState('');

	useEffect(() => {
		const storage = FB.storage().ref();

		// Get Thumbnails image,,
		storage
			.child('NKHOME/images/' + img)
			.getDownloadURL()
			.then(url => {
				// console.log(url);
				setWall(url);
			});

		// Get Portfolio content,,
		storage
			.child('NKHOME/' + fileName)
			.getDownloadURL()
			.then(url => {
				// console.log(url);
				setContentUrl(url);
			});
	});

	return (
		<div className={'col-md-4 col-sm-6 col-xs-12 portfolio-item ' + category}>
			<a className="open-project" href={contentUrl}>
				<div className="portfolio-column">
					<img src={wall} alt="" />
					<div className="portfolio-content">
						<h2>{title}</h2>
						<p>{caption}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Work;
