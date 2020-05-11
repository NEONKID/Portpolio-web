import React, { Component } from 'react';
import Typed from 'react-typed';
import { observer, inject } from 'mobx-react';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	nameCardReverse: stores.store.nameCardReverse,
}))
@observer
class Name extends Component {
	render() {
		const { nameCardReverse }: any = this.props;

		const blockStyle = nameCardReverse ? 'name-block reverse' : 'name-block';
		const conStyle = nameCardReverse ? 'name-block-container reverse' : 'name-block-container';

		return (
			<div className={blockStyle}>
				<div className={conStyle}>
					<h1>
						<span>Hi I'm</span>
						Kwang Soo Jeong
					</h1>
					<h2>
						<Typed
							strings={['Android App Developer', 'Jr. Software Engineer', 'Back-end Developer']}
							typeSpeed={60}
							backSpeed={10}
							backDelay={3600}
							smartBackspace
							cursorChar="|"
							loop
						/>
					</h2>
					<ul className="social">
						<li>
							<a href="//fb.com/NK.4869">
								<i className="ion-logo-facebook"></i>
							</a>
						</li>
						<li>
							<a href="//twitter.com/clax1412">
								<i className="ion-logo-twitter"></i>
							</a>
						</li>
						<li>
							<a href="//linkedin.com/in/kwang-soo-jeong-536b3117b/">
								<i className="ion-logo-linkedin"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Name;
