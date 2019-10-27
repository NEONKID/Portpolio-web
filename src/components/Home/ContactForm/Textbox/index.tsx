import React, { Fragment } from 'react';

type tbProps = {
	type: string;
	id: string;
	placeholder: string;
	name: string;
	minLength: number;
	error: string;
};

const Textbox = ({ type, id, placeholder, name, minLength, error }: tbProps) => {
	return (
		<Fragment>
			<input
				type={type}
				className="form-control"
				id={id}
				placeholder={placeholder}
				name={name}
				data-minlength={minLength}
				data-error={error}
				required
			/>
			<small className="help-block with-errors"></small>
		</Fragment>
	);
};

export default Textbox;
