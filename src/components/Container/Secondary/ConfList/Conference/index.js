import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class Conference extends Component {
    render() {
        const data = this.props.data;
        return (
            <li>
                <FontAwesome name="calendar"/><a href={data.link}>{data.name}</a> {data.loc}
            </li>
        );
    }
}

Conference.propTypes = {
    data: PropTypes.object
}

Conference.defaultProps = {
    data: {
        name: 'Conference name',
        link: '#',
        loc: 'Seoul'
    }
}

export default Conference;