import React from 'react';
import WebFont from 'webfontloader';

import { IntlProvider } from 'react-intl';
import { render } from 'react-dom';

import App from './components/App';
import locale from './locale';

import * as serviceWorker from './serviceWorker';

WebFont.load({
	google: {
		families: ['Poppins:300,400,500,600,700', 'sans-serif'],
	},
});

// User Language,,
const lang = navigator.language;
let curLocale = localStorage.getItem('locale');

if (curLocale === null) {
	switch (lang) {
		case 'ko-KR':
			localStorage.setItem('locale', 'ko');
			curLocale = localStorage.getItem('locale');
			break;

		case 'ja-JP':
			localStorage.setItem('locale', 'jp');
			curLocale = localStorage.getItem('locale');
			break;
	}
}

render(
	<IntlProvider locale={curLocale || 'en'} messages={locale[curLocale || 'en']}>
		<App />
	</IntlProvider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
