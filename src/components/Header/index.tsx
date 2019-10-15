import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import * as Inject from '../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	menuItemState: stores.store.menuItemState,
	resumeState: stores.store.resumeState,
	portfolioState: stores.store.portfolioState,
	blogState: stores.store.blogState,
	contactState: stores.store.contactState,
	closeBtnClick: stores.store.closeBtnClick,
}))
@observer
class Header extends Component {
	componentDidMount() {
		$('.menu-block, .menu-item, #close').on('click', () => {
			$('.content-blocks').animate({ scrollTop: 0 }, 800);
		});
	}

	render() {
		const {
			menuItemState,
			resumeState,
			portfolioState,
			blogState,
			contactState,
			closeBtnClick,
		}: any = this.props;

		const rootStyle = menuItemState
			? 'inline-header showx'
			: 'inline-header';

		const resumeStyle = resumeState
			? 'resume menu-item active'
			: 'resume menu-item';

		const portfolioStyle = portfolioState
			? 'portfolio menu-item active'
			: 'portfolio menu-item';

		const blogStyle = blogState
			? 'blog menu-item active'
			: 'blog menu-item';

		const contactStyle = contactState
			? 'contact menu-item active'
			: 'contact menu-item';

		return (
			<div className={rootStyle}>
				<span className="status">Neon K.I.D</span>
				<ul className="inline-header-menu">
					<li className={resumeStyle}>Resume</li>
					<li className={portfolioStyle}>Portfolio</li>
					<li className={blogStyle}>Blog</li>
					<li className={contactStyle}>Contact</li>
					<li
						id="close"
						className="menu-item"
						onClick={closeBtnClick}
					>
						<i className="ion-ios-close-empty"></i>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
