import React from 'react';
import i18n from 'i18next';
import { observable, action } from 'mobx';
import { MobXProviderContext } from 'mobx-react';

export class MenuStateStore {
	@observable siteLoading = true;
	@observable removeSplash = false;
	@observable menuItemState = false;
	@observable blogState = false;
	@observable contactState = false;
	@observable portfolioState = false;
	@observable resumeState = false;
	@observable nameCardReverse = false;
	@observable popupState = false;
	@observable popupContent = null;
	@observable curlanguage = i18n.language || 'en';

	@action loadingComplete = () => {
		this.siteLoading = false;
	};

	@action onRemoveSplash = () => {
		this.removeSplash = true;
	};

	@action changeLanguage = (region: string) => {
		const lng = {
			US: 'en',
			KR: 'ko',
			JP: 'jp',
		};

		i18n.changeLanguage(lng[region]).then(() => {
			this.curlanguage = lng[region];
		});
	};

	@action showBlogContent = () => {
		this.blogState = true;
		this.menuItemState = true;
		this.nameCardReverse = true;

		this.resumeState = false;
		this.contactState = false;
		this.portfolioState = false;
		this.popupState = false;
	};

	@action showResumeContent = () => {
		this.resumeState = true;
		this.menuItemState = true;
		this.nameCardReverse = true;

		this.blogState = false;
		this.contactState = false;
		this.portfolioState = false;
		this.popupState = false;
	};

	@action showPortfolioContent = () => {
		this.portfolioState = true;
		this.menuItemState = true;
		this.nameCardReverse = true;

		this.blogState = false;
		this.contactState = false;
		this.resumeState = false;
		this.popupState = false;
	};

	@action showContact = () => {
		this.contactState = true;
		this.menuItemState = true;
		this.nameCardReverse = true;

		this.blogState = false;
		this.portfolioState = false;
		this.resumeState = false;
		this.popupState = false;
	};

	@action showPopup = (content: any) => {
		this.popupContent = content;
		this.popupState = true;

		this.menuItemState = false;
	};

	@action closePopup = () => {
		this.menuItemState = true;

		this.popupContent = null;
		this.popupState = false;
	};

	@action closeBtnClick = () => {
		this.menuItemState = false;
		this.nameCardReverse = false;
		this.blogState = false;
		this.contactState = false;
		this.portfolioState = false;
		this.resumeState = false;
		this.popupState = false;
	};
}

export interface ParentProps {}

export interface Props extends ParentProps {
	store: MenuStateStore;
}

export const useStores = () => {
	return React.useContext(MobXProviderContext);
};
