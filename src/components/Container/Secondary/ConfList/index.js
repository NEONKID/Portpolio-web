import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Conference from './Conference';
import './styles.css';

class ConfList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confHist: [{
                name: 'OHDSI Symposium 2018',
                link: '//www.ohdsi.org/events/2018-ohdsi-symposium/',
                loc: 'Washington D.C'
            }, {
                name: 'Google I/O Extended 2016',
                link: '//festi.kr/festi/2016-io-extended-seoul-after/',
                loc: 'Seoul'
            }, {
                name: 'Advanced Computing Conference 2016',
                link: '#',
                loc: 'Seoul'
            }, {
                name: 'University-unified Linux User Group 2015',
                link: '//ulug.or.kr',
                loc: 'Seoul'
            }]
        };
    }

    render() {
        return (
            <aside className="list conferences aside section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='conf-title'></FormattedMessage>
                    </h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            {this.state.confHist.map((conference, i) => {
                                return (<Conference data={conference} key={i} />);
                            })}
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default ConfList;