import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class SubProject extends Component {
    render() {
        return (
            <div className="item row">
                <a className="col-md-4 col-sm-4 col-xs-12">
                    <img className="img-responsive project-image" src={this.props.data.imsrc} alt={this.props.data.title}/>
                </a>
                <div className="desc col-md-8 col-sm-8 col-xs-12">
                    <h3 className="title">{this.props.data.title}</h3>
                    <p>{this.props.data.desc}</p>
                    <p>
                        <a className="more-link" href={this.props.data.link}>
                            <FontAwesome name="external-link"/> Find out more
                        </a>
                    </p>
                </div>                         
            </div>
        );
    }
}

SubProject.propTypes = {
    data: PropTypes.object
}

SubProject.defaultProps = {
    data: {
        title: 'Project name',
        link: '#',
        desc: 'Project description',
        imsrc: 'assets/images/projects/project-5.png'
    }
}

export default SubProject;