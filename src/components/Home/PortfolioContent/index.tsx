import React, { Component } from 'react';
import Isotope from 'isotope-layout';
import { observer, inject } from 'mobx-react';
import { Translation } from 'react-i18next';

import EmailBtn from '../EmailBtn';
import FB from '../../Server/firebase';
import Work from './Work';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

interface PCState {
	iso: any;
	category: string;
	pfList: Array<any>;
}

interface PCProps {}

@inject((stores: Inject.Props) => ({
	portfolioState: stores.store.portfolioState,
	showPopup: stores.store.showPopup,
}))
@observer
class PortfolioContent extends Component<PCProps, PCState> {
	constructor(props: PCProps) {
		super(props);

		this.state = {
			iso: undefined,
			category: '*',
			pfList: [],
		};
	}

	componentDidMount() {
		const db = FB.firestore();
		db.collection('projects')
			.get()
			.then(snapshot => {
				if (!snapshot.empty)
					this.setState({
						pfList: snapshot.docs,
					});
			});
	}

	componentDidUpdate() {
		// Don't use setState method,
		// DANGEROUS infinite loop
		if (this.state.iso == null) {
			this.setState({
				iso: new Isotope('#portfolio-block-container', {
					masonry: {
						columnWidth: '.portfolio-item',
					},
					itemSelector: '.portfolio-item',
					filter: this.state.category,
				}),
			});
		} else {
			this.state.iso.arrange({
				filter: this.state.category,
			});
		}
	}

	render() {
		const { portfolioState, showPopup }: any = this.props;

		return (
			<div className={portfolioState ? 'content-blocks portfolio showx' : 'content-blocks portfolio'}>
				<section className="content">
					<div className="block-content">
						<h3 className="block-title">Portfolio</h3>
						<div className="row">
							<div className="col-md-12">
								<div className="filters">
									<span>Filters: </span>
									<Translation>
										{(t, { i18n, lng }, ready) => (
											<ul id="filters">
												<li
													className={this.state.category === '*' ? 'active' : ''}
													onClick={() => this.setState({ category: '*' })}
												>
													{ready ? t('filter-all') : 'default'}
												</li>
												<li
													className={this.state.category === '.desktop' ? 'active' : ''}
													onClick={() =>
														this.setState({
															category: '.desktop',
														})
													}
												>
													{ready ? t('filter-desktop') : 'default'}
												</li>
												<li
													className={this.state.category === '.android' ? 'active' : ''}
													onClick={() =>
														this.setState({
															category: '.mobile',
														})
													}
												>
													{ready ? t('filter-mobile') : 'default'}
												</li>
												<li
													className={this.state.category === '.webapp' ? 'active' : ''}
													onClick={() =>
														this.setState({
															category: '.webapp',
														})
													}
												>
													{ready ? t('filter-web') : 'default'}
												</li>
												<li
													className={this.state.category === '.ml' ? 'active' : ''}
													onClick={() =>
														this.setState({
															category: '.ml',
														})
													}
												>
													{ready ? t('filter-ml') : 'default'}
												</li>
											</ul>
										)}
									</Translation>
								</div>
								<div className="classic portfolio-container row" id="portfolio-block-container">
									{this.state.pfList.map((doc, i) => {
										return (
											<Work
												category={doc.data().category}
												img={doc.data().img}
												title={doc.data().title}
												caption={doc.data().caption}
												fileName={doc.data().filename}
												showPopup={showPopup}
												key={i}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<EmailBtn email="contact@neonkid.xyz" />
				</section>
			</div>
		);
	}
}

export default PortfolioContent;
