import React from 'react';
import { Translation } from 'react-i18next';

type cmProps = {
	title?: string;
	message?: string;
	id: string;
};

const ContactModal = ({ title, message, id }: cmProps) => {
	return (
		<div className="modal" role="dialog" id={id} aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">{title}</h4>
					</div>
					<div className="modal-body">
						<p>{message}</p>
					</div>
					<div className="modal-footer">
						<Translation>
							{(t, { i18n, lng }, ready) => (
								<button type="button" className="btn btn-default" data-dismiss="modal">
									{t('con-form-ok-btn')}
								</button>
							)}
						</Translation>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
