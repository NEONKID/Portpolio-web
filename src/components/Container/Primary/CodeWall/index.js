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
                title: 'ShortenURL',
                link: '//github.com/neonkid/ShortenURL',
                desc: '원본URL을 짧은 URL로 변환해주는 Windows 서버 애플리케이션',
                open: true
            }, {
                title: 'DLUG BOT',
                link: '//pf.kakao.com/_uxaxjKu/chat',
                desc: 'DLUG (단국대학교 리눅스 동아리) 챗봇 (using KakaoTalk)',
                open: false
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