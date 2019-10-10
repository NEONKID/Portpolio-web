import React from 'react';
import WebFont from 'webfontloader';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

WebFont.load({
	google: {
		families: ['Poppins Web:300,400,500,600,700', 'sans-serif'],
	},
});

render(
	<IntlProvider locale="en">
		<App />
	</IntlProvider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
