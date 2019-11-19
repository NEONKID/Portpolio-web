import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { injectIntl } from 'react-intl';
import axios from 'axios';

import 'bootstrap-validator';

import ContactContent from './ContactContent';
import ContactModal from './ContactModal';
import Textbox from './Textbox';
import Textarea from './Textarea';

import * as Inject from '../../../stores/MenuStateStore';

import './styles.css';

interface CFProps {}

interface CFState {
	name: string;
	email: string;
	msg: string;

	resTitle: string;
	resBody: string;
}

@inject((stores: Inject.Props) => ({
	contactState: stores.store.contactState,
}))
@observer
class ContactForm extends Component<CFProps, CFState> {
	state: CFState = {
		name: '',
		email: '',
		msg: '',

		resTitle: '',
		resBody: '',
	};

	emailChange = (e: any) => {
		const email = e.target.value;

		if (email.length < 5) return;
		if (!email.includes('@')) return;

		this.setState({
			email: e.target.value,
		});
	};

	msgChange = (e: any) => {
		const msg = e.target.value;

		if (msg.length < 6) return;

		this.setState({
			msg: e.target.value,
		});
	};

	nameChange = (e: any) => {
		const name = e.target.value;

		if (name.lengtn < 3) return;

		this.setState({
			name: e.target.value,
		});
	};

	sendMessage = (event: any) => {
		const { intl }: any = this.props;

		event.preventDefault();

		if (this.state.name === '' || this.state.email === '' || this.state.msg === '') {
			this.setState({
				resTitle: intl.formatMessage({ id: 'con-form-error-title' }),
				resBody: intl.formatMessage({ id: 'con-form-error-body' }),
			});
			return;
		}

		this.setState({
			resTitle: intl.formatMessage({ id: 'con-form-loading-title' }),
			resBody: intl.formatMessage({ id: 'con-form-loading-body' }),
		});

		axios
			.post('https://apis.neonkid.xyz/v1/sendMessage', {
				name: this.state.name,
				email: this.state.email,
				message: this.state.msg,
			})
			.then(res => {
				this.setState({
					resTitle: intl.formatMessage({ id: 'con-form-success-title' }),
					resBody: intl.formatMessage({ id: 'con-form-success-body' }),
				});

				console.log(res);
			})
			.catch(err => {
				this.setState({
					resTitle: intl.formatMessage({ id: 'con-form-fail-title' }),
					resBody: intl.formatMessage({ id: 'con-form-fail-body' }),
				});

				console.log(err);
			});
	};

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
								<form
									className="contact-form bv-form"
									id="contact_form"
									data-toggle="validator"
									onSubmit={this.sendMessage}
								>
									<div className="form-control-wrap">
										<div id="message" className="alert alert-danger alert-dismissible fade"></div>
										<div
											id="feedback-name"
											className="form-group has-feedback"
											onChange={this.nameChange}
										>
											<Textbox
												type="text"
												id="fname"
												placeholder={intl.formatMessage({ id: 'con-name-form' })}
												name="fname"
												minLength={2}
												error={intl.formatMessage({ id: 'con-name-error' })}
											/>
										</div>
										<div
											id="feedback-email"
											className="form-group mar-top-40 has-feedback"
											onChange={this.emailChange}
										>
											<Textbox
												type="email"
												id="email"
												placeholder={intl.formatMessage({ id: 'con-email-form' })}
												name="email"
												minLength={7}
												error={intl.formatMessage({ id: 'con-email-error' })}
											/>
										</div>
										<div
											id="feedback-comment"
											className="form-group mar-top-60 has-feedback"
											onChange={this.msgChange}
										>
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
											<button
												type="submit"
												className="btn v7"
												data-toggle="modal"
												data-target="#resModal"
											>
												{intl.formatMessage({ id: 'con-send-btn' })}
											</button>
											<ContactModal
												title={this.state.resTitle}
												message={this.state.resBody}
												id="resModal"
											/>
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
