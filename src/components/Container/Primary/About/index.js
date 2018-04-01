import React, { Component } from 'react';
import './styles.css';

import Content from './Content';

export default class About extends Component {
    render() {
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
}