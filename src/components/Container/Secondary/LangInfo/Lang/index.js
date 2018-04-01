import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

class Lang extends Component {
    renderStar() {
        let star = [];
        for (let i = 0; i < this.props.data.star; i++) {
            star.push(<FontAwesome name="star" key={i} />);
        }
        return star;
    }

    render() {
        const data = this.props.data;
        return (
            <li className="item">
                <span className="title"><strong>{ data.name }: </strong></span>
                <span className="level">{ data.level } <br className="visible-xs"/>
                    { this.renderStar() }
                </span>
            </li>
        );
    }
}

Lang.propTypes = {
    data: PropTypes.object
}

Lang.defaultProps = {
    data: {
        name: 'Korean',
        level: 'Native Speaker',
        star: 5
    }
}

export default Lang;