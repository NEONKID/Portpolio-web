import React, { Component } from 'react';
import Content from './Content';

import './styles.css';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exp: [{
                
            }]
        }
    }

    render() {
        return (
            <section className="experience section">
                <div className="section-inner">
                    <h2 className="heading">Work Experience</h2>
                    <div className="content">
                        {this.state.exp.map((exp, i) => {
                            return (<Content data={exp} key={i}/>);
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;