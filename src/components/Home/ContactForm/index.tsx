import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useTranslation, Translation } from 'react-i18next';

import 'bootstrap-validator';

import ContactContent from './ContactContent';
import ContactModal from './ContactModal';
import Textbox from './Textbox';
import Textarea from './Textarea';

import * as Inject from '../../../stores/MenuStateStore';
import { sendMsg } from '../../Server/nkapi/contactMe';

import './styles.css';

const useData = () => {
	const { store } = Inject.useStores();

	return {
		contactState: store.contactState,
	};
};

const ContactForm = () => {
	const data = useData();
	const { t } = useTranslation();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [msg, setMsg] = useState('');

	const [resTitle, setResTitle] = useState('');
	const [resBody, setResBody] = useState('');

	const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const email = e.target.value;

		if (email.length < 5) return;
		if (!email.includes('@')) return;

		setEmail(email);
	};

	const msgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const msg = e.target.value;

		if (msg.length < 6) return;

		setMsg(msg);
	};

	const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.value;

		if (name.length < 3) return;

		setName(name);
	};

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (name === '' || email === '' || msg === '') {
			setResTitle(t('con-form-error-title'));
			setResBody(t('con-form-error-body'));
			return;
		}

		setResTitle(t('con-form-loading-title'));
		setResBody(t('con-form-loading-body'));

		sendMsg(name, email, msg)
			.then(res => {
				setResTitle(t('con-form-success-title'));
				setResBody(t('con-form-success-body'));

				console.log(res);
			})
			.catch(err => {
				setResTitle(t('con-form-fail-title'));
				setResBody(t('con-form-fail-body'));

				console.log(err);
			});
	};

	const style = data.contactState ? 'content-blocks contact showx' : 'content-blocks contact';

	return (
		<div className={style}>
			<section className="content">
				<div className="block-content">
					<h3 className="block-title">Get in touch</h3>
					<Translation>
						{(t, { i18n, lng }, ready) => (
							<div className="row">
								<div className="col-md-6">
									<form
										className="contact-form bv-form"
										id="contact_form"
										data-toggle="validator"
										onSubmit={sendMessage}
									>
										<div className="form-control-wrap">
											<div
												id="message"
												className="alert alert-danger alert-dismissible fade"
											></div>
											<div
												id="feedback-name"
												className="form-group has-feedback"
												onChange={nameChange}
											>
												<Textbox
													type="text"
													id="fname"
													placeholder={t('con-name-form')}
													name="fname"
													minLength={2}
													error={t('con-name-error')}
												/>
											</div>
											<div
												id="feedback-email"
												className="form-group mar-top-40 has-feedback"
												onChange={emailChange}
											>
												<Textbox
													type="email"
													id="email"
													placeholder={t('con-email-form')}
													name="email"
													minLength={7}
													error={t('con-email-error')}
												/>
											</div>
											<div
												id="feedback-comment"
												className="form-group mar-top-60 has-feedback"
												onChange={msgChange}
											>
												<Textarea
													rows={10}
													name="comment"
													id="comment"
													placeholder={t('con-desc-form')}
													minLength={4}
													error={t('con-desc-error')}
												/>
											</div>
											<div className="form-group mar-top-40">
												<button
													type="submit"
													className="btn v7"
													data-toggle="modal"
													data-target="#resModal"
												>
													{t('con-send-btn')}
												</button>
												<ContactModal title={resTitle} message={resBody} id="resModal" />
											</div>
										</div>
									</form>
								</div>
								<div className="col-md-5">
									<ContactContent
										icon="ios-pin"
										title={t('con-loc-title')}
										content={t('con-loc-content')}
									/>
									<ContactContent icon="logo-skype" title="Skype" content="@clax1412" />
									<ContactContent
										icon="ios-mail"
										title={t('con-email-title')}
										content="contact@neonkid.xyz"
									/>
								</div>
							</div>
						)}
					</Translation>
				</div>
			</section>
		</div>
	);
};

export default observer(ContactForm);
