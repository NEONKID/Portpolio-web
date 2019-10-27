import React, { useEffect } from 'react';

import Favicon from './favicon.png';

import '../../jq';
import './styles.css';

const Preloader = () => {
	useEffect(() => {
		$(window).on('load', () => {
			$('.preloader').fadeOut('slow', () => {
				$('.preloader-left').addClass('slideOut-left');
				$('.preloader-right').addClass('slideOut-right');
			});
		});
	});

	return (
		<div className="preloader">
			<div className="anim pulse">
				<img src={Favicon} alt="" />
			</div>
		</div>
	);
};

export default Preloader;
