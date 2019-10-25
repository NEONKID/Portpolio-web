import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ContactContent from './ContactContent';
import Textbox from './Textbox';
import Textarea from './Textarea';

import * as Inject from '../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	contactState: stores.store.contactState,
}))
@observer
class ContactForm extends Component {
	render() {
		const { contactState }: any = this.props;
		const style = contactState ? 'content-blocks contact showx' : 'content-blocks contact';
		return (
			<div className={style}>
				<section className="content">
					<div className="block-content">
						<h3 className="block-title">Get in touch</h3>
						<div className="row">
							<div className="col-md-6">
								<form className="contact-form bv-form" id="contact_form">
									<div className="form-control-wrap">
										<div id="message" className="alert alert-danger alert-dismissible fade"></div>
										<div className="form-group has-feedback">
											<Textbox type="text" id="fname" placeholder="Name*" name="fname" />
										</div>
										<div className="form-group mar-top-40 has-feedback">
											<Textbox type="email" id="email" placeholder="E-mail*" name="email" />
										</div>
										<div className="form-group mar-top-60 has-feedback">
											<Textarea
												rows={10}
												name="comment"
												id="comment"
												placeholder="Your Message"
											/>
										</div>
										<div className="form-group mar-top-40">
											<button className="btn v7">Send Message</button>
										</div>
									</div>
								</form>
							</div>
							<div className="col-md-5 offset-md-1">
								<ContactContent icon="ios-pin" title="Location" content="Cheonan, Republic of KR" />
								<ContactContent icon="logo-skype" title="Skype" content="@clax1412" />
								<ContactContent icon="ios-mail" title="E-mail" content="contact@neonkid.xyz" />
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default ContactForm;
