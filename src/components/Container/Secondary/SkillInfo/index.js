import React, { Component } from 'react';
import Skill from './Skill';
import './styles.css';

class SkillInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillData: [{
                title: 'Python',
                tooltip: '간단한 REST API 개발 가능',
                level: '25%',
                grade: 'Basic'
            }, {
                title: 'Java',
                tooltip: 'JavaFX 애플리케이션 개발 및 배포 경험 있음',
                level: '45%',
                grade: 'Middle class'
            }, {
                title: 'Android',
                tooltip: '',
                level: '30%',
                grade: 'Basic'
            }, {
                title: 'Linux',
                tooltip: '',
                level: '55%',
                grade: 'Proficient'
            }]
        };
    }

    render() {
        return (
            <aside className="skills aside section">
                <div className="section-inner">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            My Representative Techniques
                        </p>             
                        <div className="skillset">
                            {this.state.skillData.map((skill, i) => {
                                return (<Skill data={skill} key={i} />);
                            })}
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default SkillInfo;