import React from 'react';
import './styles.css';

import '../../jq';

// 브라우저에 페이지가 로드 되었을 때, 발생하는 이벤트..
// HTML5를 이용한 정의된 애니메이션을 실행,,
$(window).on('load', () => {
	$('.preloader').fadeOut('slow', () => {
		$('.preloader-left').addClass('slideOut-left');
		$('.preloader-right').addClass('slideOut-right');
	});
});

const Slider = () => {
	return <div className="preloader-left"></div>;
};

export default Slider;
