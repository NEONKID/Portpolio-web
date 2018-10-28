import React, { Component } from 'react';
import Skill from './Skill';
import './styles.css';

class SkillInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillData: [{
                title: 'Python',
                tooltip: 'Flask 를 사용하여 REST API 개발 경험 있음',
                level: '25%',
                grade: 'Basic'
            }, {
                title: 'Java',
                tooltip: 'Spring boot 개발, JavaFX 개발 및 배포 및 현재 오픈 프로젝트 기여 중',
                level: '45%',
                grade: 'Middle class'
            }, {
                title: 'Android',
                tooltip: '안드로이드 앱 개발 경험 있음',
                level: '25%',
                grade: 'Basic'
            }, {
                title: 'Linux',
                tooltip: '소규모 리눅스 서버 관리 경험 / 개발 운영체제로 사용 중',
                level: '55%',
                grade: 'Proficient'
            }, {
                title: 'R',
                tooltip: 'ETL 모듈 개발 경험 및 현재 오픈 프로젝트 기여 중',
                level: '10%',
                grade: 'Basic'
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