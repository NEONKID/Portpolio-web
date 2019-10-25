import React, { useEffect } from 'react';

import '../../jq';
import './styles.css';

const Preloader = () => {
	useEffect(() => {
		// 브라우저에 페이지가 로드 되었을 때, 발생하는 이벤트..
		// HTML5를 이용한 정의된 애니메이션을 실행,,
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
				<i className="ion-ios-star"></i>
			</div>
		</div>
	);
};

export default Preloader;
