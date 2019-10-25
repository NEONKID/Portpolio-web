import React, { Fragment } from 'react';

import './styles.css';

type taProps = {
	rows: number;
	name: string;
	id: string;
	placeholder: string;
	lengthHelp?: Record<string, string>;
	emptyHelp?: Record<string, string>;
};

const Textarea = ({ rows, name, id, placeholder, lengthHelp, emptyHelp }: taProps) => {
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
			<textarea
				className="form-control"
				rows={rows}
				name={name}
				id={id}
				placeholder={placeholder}
				data-bv-field={name}
			/>
			{lengthHelpBlock}
			{emptyHelpBlock}
		</Fragment>
	);
};

export default Textarea;
