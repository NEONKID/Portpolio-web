import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

class Edu extends Component {
    render() {
        const data = this.props.data;

        return (
            <div className="item">
                <h3 className="title"><FontAwesome name="graduation-cap" /> { data.major }</h3>
                <h4 className="university">{ data.school } <span className="year">{ data.year }</span></h4>
            </div>
        );
    }
}

Edu.propTypes = {
    data: PropTypes.object
}

Edu.defaultProps = {
    data: {
        major: 'Computer Science',
        school: 'Dankook University',
        year: '(2012-2018)'
    }
}

export default Edu;