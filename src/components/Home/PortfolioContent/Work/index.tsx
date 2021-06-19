import React, { useState, useEffect } from 'react';

import { getPPContent, getThumbnailImgs } from '../../../Server/firebase/storage';

import './styles.css';

type workProps = {
	category: string;
	img: string;
	lng: string;
	title: string;
	caption: string;
	fileName: string;
	showPopup: Function;
};

const Work = ({ category, img, lng, title, caption, fileName, showPopup }: workProps) => {
	const [wall, setWall] = useState('');
	const [content, setContent]: any = useState();

	useEffect(() => {
		getThumbnailImgs(img).then((url) => setWall(url));
		getPPContent(lng, fileName)
			.then((data) => {
				setContent(data);
			})
			.catch((err) => {
				setContent('Sorry. An error occurred while loading content. I will continue to process it.');
			});
	}, [fileName, img, lng]);

	return (
		<div className={'col-md-4 col-sm-6 col-xs-12 portfolio-item ' + category}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
