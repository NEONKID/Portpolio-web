import React, { Component } from 'react';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Container />
				<Footer />
			</div>
		);
	}
}

export default App;
