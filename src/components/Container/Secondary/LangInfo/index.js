import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

import './styles.css';
import Lang from './Lang';

class LangInfo extends Component {
    constructor(props) {
        super(props);
        
        const {
            intl
        } = this.props;

        this.state = {
            langList: [{
                name: intl.formatMessage({ id: 'lang-ko' }),
                level: intl.formatMessage({ id: 'lang-speaker'}),
                star: 5
            }, {
                name: intl.formatMessage({ id: 'lang-jp' }),
                level: intl.formatMessage({ id: 'lang-speaking' }),
                star: 2
            }, {
                name: intl.formatMessage({ id: 'lang-en' }),
                level: intl.formatMessage({ id: 'lang-reading' }),
                star: 2
            }]
        };
    }

    render() {
        return (
            <aside className="languages aside section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='lang-title'></FormattedMessage>
                    </h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            {this.state.langList.map((lang, i) => {
                                return (<Lang data={lang} key={i} />);
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default injectIntl(LangInfo);