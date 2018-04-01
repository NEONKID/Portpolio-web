import React, { Component } from 'react';
import Conference from './Conference';
import './styles.css';

class ConfList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confHist: [{
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
                    <h2 className="heading">Conferences</h2>
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