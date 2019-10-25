import React, { useEffect } from 'react';

import './styles.css';
import '../styles.css';

const PopupForm = () => {
	// Same componentDidMount
	useEffect(() => {
		$('#close-pop').on('click', () => {
			$('.content-blocks.pop').removeClass('showx');
			$('.sidebar-menu').removeClass('hidex');
			$('.inline-header').addClass('showx');
			$('.content-blocks.pop section').empty();
		});
	}, []);

	return (
		<div className="content-blocks pop">
			<div id="close-pop" className="close-pop">
				Close <i className="ion-ios-close"></i>
			</div>
			<section className="content"></section>
		</div>
	);
};

export default PopupForm;
