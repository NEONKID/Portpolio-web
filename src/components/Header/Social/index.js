import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class Social extends Component {
    render() {
        const data = this.props.data;
        return (
            <li>
                <a href={data.link}><FontAwesome name={data.icon}/></a>
            </li>
        );
    }
}

Social.propTypes = {
    data: PropTypes.object
}

Social.defaultProps = {
    data: {
        icon: 'twitter',
        link: '#'
    }
}

export default Social;