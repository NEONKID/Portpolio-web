import React, { Component } from 'react';
import './styles.css';
import Edu from './Edu';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eduList: [{
                major: 'Information Processing',
                school: '천안상업고등학교',
                year: '(2009-2012)'
            }, {
                major: 'Computer Science',
                school: 'Dankook University',
                year: '(2012-2018)'
            }]
        };
    }

    render() {
        return (
            <aside className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        {this.state.eduList.map((edu, i) => {
                            return (<Edu data={edu} key={i} />);
                        })}
                    </div>
                </div>
            </aside>
        );
    }
}

export default Education;