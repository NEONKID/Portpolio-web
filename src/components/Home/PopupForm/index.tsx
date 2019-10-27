import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as Inject from '../../../stores/MenuStateStore';

import './styles.css';
import '../styles.css';

@inject((stores: Inject.Props) => ({
	popupContent: stores.store.popupContent,
	popupState: stores.store.popupState,
	closePopup: stores.store.closePopup,
}))
@observer
class PopupForm extends Component {
	render() {
		const { popupContent, popupState, closePopup }: any = this.props;
		const blockStyle = popupState ? 'content-blocks pop showx' : 'content-blocks pop';

		return (
			<div className={blockStyle}>
				<div id="close-pop" className="close-pop" onClick={closePopup}>
					Close <i className="ion-ios-close"></i>
				</div>
				<section className="content" dangerouslySetInnerHTML={{ __html: popupContent }}></section>
			</div>
		);
	}
}

export default PopupForm;
