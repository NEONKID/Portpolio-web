import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <div className="item">
                <h3 className="title">{ data.title }<span className="place"><a href="#">{ data.place }</a></span> <span class="year">{ data.year }</span></h3>
                    <p>{ data.desc }</p>
            </div>
        );
    }
}

Content.propTypes = {
    data: PropTypes.object
}

Content.defaultProps = {
    data: {
        title: 'Developer Name',
        place: 'Place Name',
        year: 'year',
        desc: 'Comments...'
    }
}

export default Content;