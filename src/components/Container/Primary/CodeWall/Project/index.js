import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class Project extends Component {
    render() {
        const open = (<span className="label label-theme">Open Source</span>);
        const close = '';
        const data = this.props.data;

        return (
            <div className="item">
                <h3 className="title">{ data.title } { this.props.isOpen ? open : close } </h3>
                <p className="summary">{ data.desc }</p>
                <p>
                    <a className="more-link" href={ data.link } >
                        <FontAwesome name="external-link" />{ this.props.isOpen ? 'View on GitHub' : 'Find out more' }
                    </a>
                </p>
            </div>
        );
    }
}

Project.propTypes = {
    data: PropTypes.object,
    isOpen: PropTypes.bool
}

Project.defaultProps = {
    data: {
        title: 'Project Name',
        link: '#',
        desc: 'Project Description'
    },
    isOpen: false
}

export default Project;