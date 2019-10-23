import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import * as Inject from '../../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	showContact: stores.store.showContact,
	contactState: stores.store.contactState,
}))
@observer
class Contact extends Component {
	render() {
		const { contactState, showContact }: any = this.props;
		const style = contactState ? 'contact menu-item active' : 'contact menu-item';

		return (
			<div className="contact-block menu-block" onClick={showContact}>
				<div className="contact-block-container">
					<h2 className={style}>Contact</h2>
				</div>
			</div>
		);
	}
}

export default Contact;
