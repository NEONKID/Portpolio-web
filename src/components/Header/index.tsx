import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

import * as Inject from '../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	menuItemState: stores.store.menuItemState,
	resumeState: stores.store.resumeState,
	portfolioState: stores.store.portfolioState,
	blogState: stores.store.blogState,
	contactState: stores.store.contactState,
	closeBtnClick: stores.store.closeBtnClick,
	showBlogContent: stores.store.showBlogContent,
	showContact: stores.store.showContact,
	showResumeContent: stores.store.showResumeContent,
	showPortfolioContent: stores.store.showPortfolioContent,
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
			showBlogContent,
			showContact,
			showResumeContent,
			showPortfolioContent,
		}: any = this.props;

		return (
			<div className={menuItemState ? 'inline-header showx' : 'inline-header'}>
				<span className="status">Neon K.I.D</span>
				<ul className="inline-header-menu">
					<li
						className={resumeState ? 'resume menu-item active' : 'resume menu-item'}
						onClick={showResumeContent}
					>
						<FormattedMessage id="menu-resume" />
					</li>

					<li
						className={portfolioState ? 'portfolio menu-item active' : 'portfolio menu-item'}
						onClick={showPortfolioContent}
					>
						<FormattedMessage id="menu-portfolio" />
					</li>
					<li className={blogState ? 'blog menu-item active' : 'blog menu-item'} onClick={showBlogContent}>
						<FormattedMessage id="menu-blog" />
					</li>
					<li
						className={contactState ? 'contact menu-item active' : 'contact menu-item'}
						onClick={showContact}
					>
						<FormattedMessage id="menu-contact" />
					</li>
					<li id="close" className="menu-item" onClick={closeBtnClick}>
						<i className="ion-ios-close"></i>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
