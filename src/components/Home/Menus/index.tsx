import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Blog from './Blog';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	nameCardReverse: stores.store.nameCardReverse,
}))
@observer
class Menus extends Component {
	render() {
		const { nameCardReverse }: any = this.props;
		const style = nameCardReverse ? 'menu-blocks hidex' : 'menu-blocks';

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
