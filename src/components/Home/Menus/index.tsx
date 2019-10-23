import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Blog from './Blog';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	menuItemState: stores.store.menuItemState,
}))
@observer
class Menus extends Component {
	render() {
		const { menuItemState }: any = this.props;
		const style = menuItemState ? 'menu-blocks hidex' : 'menu-blocks';

		return (
			<div className={style}>
				<Resume />
				<Portfolio />
				<Blog />
				<Contact />
			</div>
		);
	}
}

export default Menus;
