import React, { Component } from 'react';
import { FormattedMessage }from 'react-intl';

class AboutContent extends Component {
    render() {
        return (
             <p><FormattedMessage id="ab-intro"></FormattedMessage></p>
        );
    }
}

export default AboutContent;