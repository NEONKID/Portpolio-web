import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FB from '../../../Server';

import './styles.css';

type workProps = {
	category: string;
	img: string;
	title: string;
	caption: string;
	fileName: string;
	showPopup: any;
};

const Work = ({ category, img, title, caption, fileName, showPopup }: workProps) => {
	const [wall, setWall] = useState('');
	const [content, setContent]: any = useState();

	useEffect(() => {
		const storage = FB.storage().ref();

		// Get Thumbnails image,,
		storage
			.child('NKHOME/images/' + img)
			.getDownloadURL()
			.then(url => {
				setWall(url);
			});

		// Get Portfolio content,,
		storage
			.child(`NKHOME/${localStorage.getItem('locale') || 'en'}/${fileName}`)
			.getDownloadURL()
			.then(url => {
				axios
					.get(url, {
						method: 'GET',
					})
					.then(res => {
						setContent(res.data);
					});
			})
			.catch(err => {
				setContent('Sorry. An error occurred while loading content. I will continue to process it.');
			});
	});

	return (
		<div className={'col-md-4 col-sm-6 col-xs-12 portfolio-item ' + category}>
			<a className="open-project" onClick={() => showPopup(content)}>
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
