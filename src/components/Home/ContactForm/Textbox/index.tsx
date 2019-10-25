import React, { Fragment } from 'react';

type tbProps = {
	type: string;
	id: string;
	placeholder: string;
	name: string;
	lengthHelp?: Record<string, string>;
	emptyHelp?: Record<string, string>;
};

const Textbox = ({ type, id, placeholder, name, lengthHelp, emptyHelp }: tbProps) => {
	const lengthHelpBlock =
		lengthHelp != null ? (
			<small
				className="help-block"
				data-bv-validator="stringLength"
				data-bv-for={name}
				data-bv-result="NOT VALIDATED"
			>
				{lengthHelp['message']}
			</small>
		) : null;

	const emptyHelpBlock =
		emptyHelp != null ? (
			<small
				className="help-block"
				data-bv-validator="notEmpty"
				data-bv-for={name}
				data-bv-result="NOT VALIDATED"
			>
				{emptyHelp['message']}
			</small>
		) : null;

	return (
		<Fragment>
			<input
				type={type}
				className="form-control"
				id={id}
				placeholder={placeholder}
				name={name}
				data-bv-field={name}
			/>
			{lengthHelpBlock}
			{emptyHelpBlock}
		</Fragment>
	);
};

export default Textbox;
