import React, { Component } from 'react';
import { Translation } from 'react-i18next';
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
				<Translation>
					{(t, { i18n, lng }, ready) => (
						<ul className="inline-header-menu">
							<li
								className={resumeState ? 'resume menu-item active' : 'resume menu-item'}
								onClick={showResumeContent}
							>
								{ready ? t('menu-resume') : 'default'}
							</li>
							<li
								className={portfolioState ? 'portfolio menu-item active' : 'portfolio menu-item'}
								onClick={showPortfolioContent}
							>
								{ready ? t('menu-portfolio') : 'default'}
							</li>
							<li
								className={blogState ? 'blog menu-item active' : 'blog menu-item'}
								onClick={showBlogContent}
							>
								{ready ? t('menu-blog') : 'default'}
							</li>
							<li
								className={contactState ? 'contact menu-item active' : 'contact menu-item'}
								onClick={showContact}
							>
								{ready ? t('menu-contact') : 'default'}
							</li>
							<li id="close" className="menu-item" onClick={closeBtnClick}>
								<i className="ion-ios-close"></i>
							</li>
						</ul>
					)}
				</Translation>
			</div>
		);
	}
}

export default Header;
