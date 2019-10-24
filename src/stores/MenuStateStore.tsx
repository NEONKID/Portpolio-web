import { observable, action } from 'mobx';

export class MenuStateStore {
	@observable menuItemState = false;
	@observable blogState = false;
	@observable contactState = false;
	@observable portfolioState = false;
	@observable resumeState = false;
	@observable nameCardReverse = false;
	@observable popupState = false;

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
