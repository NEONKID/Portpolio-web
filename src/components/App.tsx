import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';

import 'ionicons/dist/css/ionicons.css';

import Preloader from './Preloader';
import Slider from './Slider';
import Header from './Header';
import Home from './Home';
import { MenuStateStore } from '../stores/MenuStateStore';

import './App.css';

const App = () => {
	const menuStore = new MenuStateStore();

	return (
		<Provider store={menuStore}>
			<Fragment>
				<Preloader />
				<Slider />
				<Header />
				<Home />
			</Fragment>
		</Provider>
	);
};

export default App;
