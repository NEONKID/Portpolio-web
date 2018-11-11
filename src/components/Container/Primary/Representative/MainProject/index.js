import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

// 일부 수정한 라이브러리....
import Modal from 'react-awesome-modal';

import Demo from './Demo';
import HomeIoT from '../img/HomeIoT_Main.png';

class MainProject extends Component {
    state = {
        isVisible: false,
        video: [{
            link: 'lVnw2F2O4DU',
            title: '창문 제어(Servo Motor)'
        }, {
            link: '2_B7H4lB6Eg',
            title: '조명 제어(LED Light)'
        }, {
            link: 'ql-9d7asuV4',
            title: '비상벨 제어(Bell)'
        }, {
            link: 'KzdFw2BjNVg',
            title: '복핣 명령 제어'
        }]
    }

    openModal = () => this.setState({ isVisible: true })
    closeModal = () => this.setState({ isVisible: false })

    render() {
        const modalView = (
            <Modal visible={true} width="48%" height="80%">
                <Demo data={this.state.video} onClose={this.closeModal} />
            </Modal>
        )
        return (
            <div className="item featured">
                <h3 className="title">
                    <FormattedMessage id='rp-title'></FormattedMessage>
                </h3>
                <p className="summary">
                    <FormattedMessage id='rp-summary'></FormattedMessage>
                </p>
                <div className="featured-image">
                    <a>
                        <img className="img-responsive project-image" src={HomeIoT} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">Great</div>
                    </div>
                </div>                     
                <div className="desc text-left">                                    
                    <p><FormattedMessage id='rp-main-desc-A'></FormattedMessage></p>
                    <p><FormattedMessage id='rp-main-desc-B'></FormattedMessage></p>
                </div>        
                <Button color="info" className="btn-cta-secondary" onClick={this.openModal}><FontAwesome name='thumbs-o-up' /> View Demo</Button>
                { this.state.isVisible ? modalView : undefined } 
            </div>
        );
    }
}

export default MainProject;