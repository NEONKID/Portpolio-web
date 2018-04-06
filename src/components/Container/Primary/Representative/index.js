import React, { Component } from 'react';
import './styles.css';

import MainProject from './MainProject';
import SubProject from './SubProject';

import OpenPOS from './img/OpenPOS.png';
import SmartDiary from './img/SmartDiary.png';

class Representative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectList: [{
                title: 'OpenPOS',
                link: '//github.com/neonkid/OpenPOS',
                desc: 'Windows용 공개형 POS 프로그램',
                more: '#',
                imsrc: OpenPOS
            }, {
                title: 'SmartDiary',
                link: '//blog.neonkid.xyz/105',
                desc: 'Java기반 수입/지출 기반형 다이어리 프로그램',
                more: '#',
                imsrc: SmartDiary
            }]
        };
    }

    render() {
        return (
            <section className="latest section">
                <div className="section-inner">
                    <h2 className="heading">Representative Project</h2>
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

export default Representative;