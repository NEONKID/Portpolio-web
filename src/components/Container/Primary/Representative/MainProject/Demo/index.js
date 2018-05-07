import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Demo extends React.Component {
    render() {
        return (
            <div className="dialog">
                <h1>HomeIoT Preview</h1>
                <p>Some contents</p>
                <a href="javascript:void(0);" onClick={this.props.onClose}>Close</a>
            </div>
        );
    }
}

Demo.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Demo;
