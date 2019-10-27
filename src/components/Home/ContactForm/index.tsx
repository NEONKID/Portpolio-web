import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { injectIntl } from 'react-intl';

import 'bootstrap-validator';

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
		const { contactState, intl }: any = this.props;
		const style = contactState ? 'content-blocks contact showx' : 'content-blocks contact';

		return (
			<div className={style}>
				<section className="content">
					<div className="block-content">
						<h3 className="block-title">Get in touch</h3>
						<div className="row">
							<div className="col-md-6">
								<form className="contact-form bv-form" id="contact_form" data-toggle="validator">
									<div className="form-control-wrap">
										<div id="message" className="alert alert-danger alert-dismissible fade"></div>
										<div className="form-group has-feedback">
											<Textbox
												type="text"
												id="fname"
												placeholder={intl.formatMessage({ id: 'con-name-form' })}
												name="fname"
												minLength={2}
												error={intl.formatMessage({ id: 'con-name-error' })}
											/>
										</div>
										<div className="form-group mar-top-40 has-feedback">
											<Textbox
												type="email"
												id="email"
												placeholder={intl.formatMessage({ id: 'con-email-form' })}
												name="email"
												minLength={7}
												error={intl.formatMessage({ id: 'con-email-error' })}
											/>
										</div>
										<div className="form-group mar-top-60 has-feedback">
											<Textarea
												rows={10}
												name="comment"
												id="comment"
												placeholder={intl.formatMessage({ id: 'con-desc-form' })}
												minLength={4}
												error={intl.formatMessage({ id: 'con-desc-error' })}
											/>
										</div>
										<div className="form-group mar-top-40">
											<button type="submit" className="btn v7">
												{intl.formatMessage({ id: 'con-send-btn' })}
											</button>
										</div>
									</div>
								</form>
							</div>
							<div className="col-md-5">
								<ContactContent
									icon="ios-pin"
									title={intl.formatMessage({ id: 'con-loc-title' })}
									content={intl.formatMessage({ id: 'con-loc-content' })}
								/>
								<ContactContent icon="logo-skype" title="Skype" content="@clax1412" />
								<ContactContent
									icon="ios-mail"
									title={intl.formatMessage({ id: 'con-email-title' })}
									content="contact@neonkid.xyz"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default injectIntl(ContactForm);
