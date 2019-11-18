import React, { Fragment } from 'react';

import './styles.css';

type taProps = {
	rows: number;
	name: string;
	id: string;
	placeholder: string;
	minLength: number;
	error: string;
	onChange?: any;
};

const Textarea = ({ rows, name, id, placeholder, minLength, error, onChange }: taProps) => {
	return (
		<Fragment>
			<textarea
				className="form-control"
				rows={rows}
				name={name}
				id={id}
				placeholder={placeholder}
				data-minlength={minLength}
				data-error={error}
				onChange={onChange}
				required
			/>
			<small className="help-block with-errors"></small>
		</Fragment>
	);
};

export default Textarea;
