import React from 'react';
import Primary from './Primary';
import Secondary from './Secondary';

const Container = () => {
    return (
        <div className="container sections-wrapper">
			<div className="row">
				<Primary />
				<Secondary />
			</div>
		</div>
    );
}

export default Container;
