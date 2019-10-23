import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import * as Inject from '../../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	showPortfolioContent: stores.store.showPortfolioContent,
	portfolioState: stores.store.portfolioState,
}))
@observer
class Portfolio extends Component {
	render() {
		const { portfolioState, showPortfolioContent }: any = this.props;
		const style = portfolioState ? 'portfolio menu-item active' : 'portfolio menu-item';

		return (
			<div className="portfolio-block menu-block" onClick={showPortfolioContent}>
				<div className="portfolio-block-container">
					<h2 className={style}>Portfolio</h2>
				</div>
			</div>
		);
	}
}

export default Portfolio;
