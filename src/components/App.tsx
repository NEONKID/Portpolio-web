import React from 'react';
import { Provider } from 'mobx-react';

import Preloader from './Preloader';
import Slider from './Slider';
import Header from './Header';
import Home from './Home';

import { MenuStateStore } from '../stores/MenuStateStore';
import './App.css';
import './ionicons-min.css';

const App = () => {
	const menuStore = new MenuStateStore();

	return (
		<Provider store={menuStore}>
			<div>
				<Preloader />
				<Slider />
				<Header />
				<Home />
			</div>
		</Provider>
	);
};

export default App;
