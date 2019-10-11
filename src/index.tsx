import React from 'react';
import WebFont from 'webfontloader';

import { Provider } from 'mobx-react';
import { render } from 'react-dom';
import { resumeStore } from './stores/resumeStore';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

WebFont.load({
	google: {
		families: ['Poppins Web:300,400,500,600,700', 'sans-serif'],
	},
});

render(
	<Provider store={resumeStore}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
