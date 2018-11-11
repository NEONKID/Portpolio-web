import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import FontAwesome from 'react-fontawesome';

import './styles.css'
import Project from './Project';

class CodeWall extends Component {
    constructor(props) {
        super(props);

        const {
            intl
        } = this.props;

        this.state = {
            projectList: [{
                title: 'DuribonDuribon',
                link: '//github.com/neonkid/DuribonDuribon',
                desc: intl.formatMessage({ id: 'op-A-desc'}), 
                open: true
            }, {
                title: 'RCDM-ETL',
                link: '//github.com/neonkid/RCDM-ETL',
                desc: intl.formatMessage({ id: 'op-B-desc'}),
                open: true
            }, {
                title: 'DLUG BOT',
                link: '//github.com/neonkid/DLUGBot',
                desc: intl.formatMessage({ id: 'op-C-desc'}),
                open: true
            }]
        };
    }

    render() {
        return (
            <section className="projects section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='op-title'></FormattedMessage>
                    </h2>
                    <div className="content">
                        {this.state.projectList.map((project, i) => {
                            return (<Project data={ project } isOpen={ project.open } key={i}/>);
                        })}
                        <a href="//github.com/neonkid"><Button color="success" className="btn-cta-secondary">
                            <FormattedMessage id='more-github'></FormattedMessage><FontAwesome name="chevron-right" />
                        </Button></a>
                    </div> 
                </div>                 
            </section>
        );
    }
}

export default injectIntl(CodeWall);