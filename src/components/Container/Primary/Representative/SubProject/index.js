import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class SubProject extends Component {
    render() {
        const open = (<span className="label label-theme">Open Source</span>);
        return (
            <div className="item row">
                <a className="col-md-4 col-sm-4 col-xs-12" href={this.props.data.link}>
                    <img className="img-responsive project-image" src={this.props.data.imsrc} alt={this.props.data.title}/>
                </a>
                <div className="desc col-md-8 col-sm-8 col-xs-12">
                    <h3 className="title"><a href={this.props.data.link}>{this.props.data.title} {this.props.isOpen ? open : ''}</a></h3>
                    <p>{this.props.data.desc}</p>
                    <p>
                        <a className="more-link" href={this.props.data.more}>
                            <FontAwesome name="external-link"/> Find out more
                        </a>
                    </p>
                </div>                         
            </div>
        );
    }
}

SubProject.propTypes = {
    data: PropTypes.object,
    isOpen: PropTypes.bool
}

SubProject.defaultProps = {
    data: {
        title: 'Project name',
        link: '#',
        desc: 'Project description',
        more: '#',
        imsrc: 'assets/images/projects/project-5.png',
    }
}

export default SubProject;