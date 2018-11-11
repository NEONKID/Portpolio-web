import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Skill from './Skill';
import './styles.css';

class SkillInfo extends Component {
    constructor(props) {
        super(props);

        const {
            intl
        } = this.props;

        this.state = {
            skillData: [{
                title: 'Python',
                tooltip: intl.formatMessage({ id: 'tech-python-desc' }),
                level: '25%',
                grade: intl.formatMessage({ id: 'tech-basic-grade' })
            }, {
                title: 'Java',
                tooltip: intl.formatMessage({ id: 'tech-java-desc' }),
                level: '45%',
                grade: intl.formatMessage({ id: 'tech-mid-grade' })
            },  {
                title: 'R',
                tooltip: intl.formatMessage({ id: 'tech-r-desc' }),
                level: '10%',
                grade: intl.formatMessage({ id: 'tech-basic-grade' })
            }, {
                title: 'Linux',
                tooltip: intl.formatMessage({ id: 'tech-linux-desc' }),
                level: '55%',
                grade: intl.formatMessage({ id: 'tech-pro-grade' })
            }, {
                title: 'Android',
                tooltip: intl.formatMessage({ id: 'tech-android-desc' }),
                level: '25%',
                grade: intl.formatMessage({ id: 'tech-basic-grade' })
            }]
        };
    }

    render() {
        return (
            <aside className="skills aside section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='tech-title'></FormattedMessage>
                    </h2>
                    <div className="content">
                        <p className="intro">
                            <FormattedMessage id='tech-summary'></FormattedMessage>
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

export default injectIntl(SkillInfo);