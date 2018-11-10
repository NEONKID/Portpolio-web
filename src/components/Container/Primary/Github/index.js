import React, { Component } from 'react';
import GithubFeed from 'react-github-activity';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

import 'react-octicon';
import './styles.css';

class Github extends Component {
    constructor(props) {
        super(props);
        this.state = { events: [] };
    }
    
    componentDidMount() {
        const getActivity = () => axios.get('https://api.github.com/users/neonkid/events').then(response => {
            this.setState({ events: response.data });
        }).catch(err => {
            console.error(err);
        });
        getActivity();
    }

    render() {
        const fullname = 'N.K';
        const username = 'NEONKID';
        const avatarUrl = 'https://avatars.githubusercontent.com/neonkid';

        return (
            <section className="github section">
                <div className="section-inner">
                    <h2 className="heading"><FormattedMessage id='my-github'></FormattedMessage></h2>              
                    <div id="github-graph" className="github-graph">
                    </div>   
                    <div id="ghfeed" className="ghfeed">
                        <GithubFeed 
                            fullName={fullname}
                            userName={username}
                            avatarUrl={avatarUrl}
                            events={this.state.events} />
                    </div>            
                </div>
            </section>
        );
    }
}

export default Github;