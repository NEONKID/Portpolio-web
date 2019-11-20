import React from 'react';
import { injectIntl, IntlFormatters, WrappedComponentProps } from 'react-intl';

type cmProps = {
	title?: string;
	message?: string;
	id: string;
	intl?: IntlFormatters;
};

const ContactModal = ({ title, message, id, intl }: cmProps & WrappedComponentProps) => {
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
						<button type="button" className="btn btn-default" data-dismiss="modal">
							{intl.formatMessage({ id: 'con-form-ok-btn' })}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default injectIntl(ContactModal);
