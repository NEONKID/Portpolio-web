import React, { Component } from 'react';
import './styles.css';
import Lang from './Lang';

class LangInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            langList: [{
                name: 'Korean',
                level: 'Native Speaker',
                star: 5
            }, {
                name: 'Japanese',
                level: 'Simple communicable',
                star: 2
            }, {
                name: 'English',
                level: 'Simple Reading',
                star: 2
            }]
        };
    }

    render() {
        return (
            <aside className="languages aside section">
                <div className="section-inner">
                    <h2 className="heading">Languages</h2>
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

export default LangInfo;