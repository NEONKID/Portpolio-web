import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonGroup, Button } from 'reactstrap';

import Item from './Item';

import './styles.css';
import NotiIcon from './img/NotiIcon.png';

class Demo extends React.Component {
    state = {
        pvName: undefined
    }

    render() {
        const pv = (<Item pvName={ this.state.pvName } />)
        const initPv = (
            <div className="loading">
                <img src={NotiIcon} alt="noti_Video" />
                <h3>시연 영상을 하단의 버튼에서 클릭해주세요.</h3>
            </div>
        )

        return (
            <div className="dialog">
                <a className="closeBtn" onClick={this.props.onClose}><FontAwesome name={"close"} size="2x" /></a>
                <h1>HomeIoT Preview</h1>
                <div className="content">
                    { this.state.pvName === undefined ? initPv : pv}
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.setState({pvName: 'lVnw2F2O4DU'})}>창문 제어(Servo Motor)</Button>
                        <Button color="primary" onClick={() => this.setState({pvName: '2_B7H4lB6Eg'})}>조명 제어(LED Light)</Button>
                        <Button color="primary" onClick={() => this.setState({pvName: 'ql-9d7asuV4'})}>비상벨 제어(Bell)</Button>
                        <Button color="primary" onClick={() => this.setState({pvName: 'KzdFw2BjNVg'})}>복핣 명령 제어</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

Demo.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Demo;
