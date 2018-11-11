import React from 'react';
import './styles.css';
import { FormattedMessage }from 'react-intl';

import Content from './Content';

const About = () => {
    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">
                    <FormattedMessage id='ab-card'></FormattedMessage>
                </h2>
                <div className="content">
                    <Content />
                </div>
            </div>             
        </section>
    );
}

export default About;