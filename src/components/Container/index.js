import React, { Component } from 'react';
import Primary from './Primary';
import Secondary from './Secondary';

class Container extends Component {
    render() {
        return (
            <div className="container sections-wrapper">
				<div className="row">
					<Primary />
					<Secondary />
				</div>
			</div>
        );
    }
}

export default Container;
