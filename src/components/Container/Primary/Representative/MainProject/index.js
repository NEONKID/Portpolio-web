import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-awesome-modal';

import Demo from './Demo';

import HomeIoT from '../img/HomeIoT_Main.png';

class MainProject extends Component {
    state = {
        isVisible: false
    }

    openModal = () => this.setState({ isVisible: true })
    closeModal = () => this.setState({ isVisible: false })

    render() {
        const modalView = (
            <Modal visible={this.state.isVisible} width="900" height="800" effect="fadeInUp">
                <Demo onClose={this.closeModal} />
            </Modal>
        );

        return (
            <div className="item featured">
                <h3 className="title">HomeIoT</h3>
                <p className="summary">Arduino, Windows Server, SmartPhone을 사용한 가정용 IoT 시스템</p>
                <div className="featured-image">
                    <a>
                        <img className="img-responsive project-image" src={HomeIoT} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">Great</div>
                    </div>
                </div>                     
                <div className="desc text-left">                                    
                    <p>집 안에 있는 창문, 현관문들이 온도와 기상 환경 데이터들의 변화를 통해 이들을 자동 제어하고 집 바깥에서도 제어할 수 있는 스마트홈을 생각하여 개발한 저의 졸업 작품입니다.</p>
                    <p>해당 작품에서 저는 Client Application을 담당하였으며 플랫폼으로 Android를 선택하였고, 집 안의 센서들을 버튼으로 제어하는 것과 동시에 음성으로 제어할 수 있도록 구현하였습니다.</p>
                </div>        
                <Button color="info" className="btn-cta-secondary" onClick={this.openModal}><FontAwesome name='thumbs-o-up' /> View Demo</Button>
                { this.state.isVisible ? modalView : undefined }
            </div>
        );
    }
}

export default MainProject;