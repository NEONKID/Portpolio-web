import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './styles.css'
import Project from './Project';

class CodeWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: [{
                title: 'DuribonDuribon',
                link: '//github.com/neonkid/DuribonDuribon',
                desc: '단국대학교 천안캠퍼스 길 안내 애플리케이션', 
                open: true
            }, {
                title: 'RCDM-ETL',
                link: '//github.com/neonkid/RCDM-ETL',
                desc: '방사선(Radiology e.q: CT, MRI, X-ray) 이미지 ETL 모듈',
                open: true
            }, {
                title: 'DLUG BOT',
                link: '//github.com/neonkid/DLUGBot',
                desc: 'DLUG Chatbot (2019. 12. 31 서비스 종료 예정)',
                open: true
            }]
        };
    }

    render() {
        return (
            <section className="projects section">
                <div className="section-inner">
                    <h2 className="heading">Other Projects</h2>
                    <div className="content">
                        {this.state.projectList.map((project, i) => {
                            return (<Project data={ project } isOpen={ project.open } key={i}/>);
                        })}
                        <a href="//github.com/neonkid"><Button color="success" className="btn-cta-secondary">
                            More on Github <FontAwesome name="chevron-right" />
                        </Button></a>
                    </div> 
                </div>                 
            </section>
        );
    }
}

export default CodeWall;