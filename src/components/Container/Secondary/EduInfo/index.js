import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

import './styles.css';
import Edu from './Edu';

class Education extends Component {
    constructor(props) {
        super(props);

        const {
            intl
        } = this.props;

        this.state = {
            eduList: [{
                major: intl.formatMessage({ id: 'edu-hs-major' }),
                school: intl.formatMessage({ id: 'edu-hs-name' }),
                year: '(2009-2012)'
            }, {
                major: intl.formatMessage({ id: 'edu-univ-major' }),
                school: intl.formatMessage({ id: 'edu-hs-name' }),
                year: '(2012-2018)'
            }]
        };
    }

    render() {
        return (
            <aside className="education aside section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='edu-title'></FormattedMessage>
                    </h2>
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

export default injectIntl(Education);