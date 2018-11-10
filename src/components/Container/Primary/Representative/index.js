import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './styles.css';

import MainProject from './MainProject';
import SubProject from './SubProject';

import OpenPOS from './img/OpenPOS.png';
import SmartDiary from './img/SmartDiary.png';

class Representative extends Component {
    
    constructor(props) {
        super(props);

        const {
            intl 
        } = this.props;

        this.state = {
            projectList: [{
                title: 'OpenPOS',
                link: '//github.com/neonkid/OpenPOS',
                desc: intl.formatMessage({ id: 'rp-sub-A-desc'}),
                imsrc: OpenPOS
            }, {
                title: 'SmartDiary',
                link: '//blog.neonkid.xyz/105',
                desc: intl.formatMessage({ id: 'rp-sub-B-desc'}),
                imsrc: SmartDiary
            }]
        };
    }

    render() { 
        return (
            <section className="latest section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='rp-card' />
                    </h2>
                    <div className="content">    
                        <MainProject />
                        <hr className="divider" />
                        {this.state.projectList.map((project, i) => {
                            return (<SubProject data={project} key={i}/>);
                        })}
                    </div>              
                </div>
            </section>
        );
    }
}

export default injectIntl(Representative);