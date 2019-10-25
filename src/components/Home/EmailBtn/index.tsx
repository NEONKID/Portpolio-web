import React from 'react';

import './styles.css';

type ebProps = {
	email: string;
};

const EmailBtn = ({ email }: ebProps) => {
	return (
		<div className="row text-center">
			<div className="col-md-12 btn-email">
				<a href={'mailto:' + email} className="btn lowercase">
					{email}
				</a>
			</div>
		</div>
	);
};

export default EmailBtn;
