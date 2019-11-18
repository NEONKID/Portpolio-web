import React, { Fragment } from 'react';

type tbProps = {
	type: string;
	id: string;
	placeholder: string;
	name: string;
	minLength: number;
	error: string;
	onChange?: any;
};

const Textbox = ({ type, id, placeholder, name, minLength, error, onChange }: tbProps) => {
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
				onChange={onChange}
				required
			/>
			<small className="help-block with-errors"></small>
		</Fragment>
	);
};

export default Textbox;
