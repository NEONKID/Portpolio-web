import React from 'react';

import Name from './Name';
import Menus from './Menus';
import BlogContent from './BlogContent';
import ContactForm from './ContactForm';
import PopupForm from './PopupForm';
import PortfolioContent from './PortfolioContent';
import ResumeContent from './ResumeContent';

import './styles.css';

const Home = () => {
	const opacity = {
		opacity: 0.7,
	};

	return (
		<section className="home img-bg">
			{/* <div className="bgScroll"></div> */}
			<div className="overlay" style={opacity}></div>
			<div className="container">
				<Name />
				<Menus />
				<ResumeContent />
				<PortfolioContent />
				<BlogContent />
				<ContactForm />
				<PopupForm />
			</div>
		</section>
	);
};

export default Home;
