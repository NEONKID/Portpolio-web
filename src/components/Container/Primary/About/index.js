import React from 'react';
import './styles.css';

import Content from './Content';

const About = () => {
    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">About Me</h2>
                <div className="content">
                    <Content />
                </div>
            </div>             
        </section>
    );
}

export default About;