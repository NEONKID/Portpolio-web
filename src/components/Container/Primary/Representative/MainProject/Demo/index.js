import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { ButtonGroup, Button } from 'reactstrap';

import Item from './Item';
import NotiIcon from './img/NotiIcon.png';

import './styles.css';

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
                        { this.props.data.map((video, i) => {
                            return (<Button color="primary" onClick={() => this.setState({pvName: video.link})} key={i}>{video.title}</Button> )
                        })}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

Demo.propTypes = {
    data: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
}

Demo.defaultProps = {
    data: {
        link: 'BUhuOwwD4n8',
        title: 'Sample Video (Sonic Mania Plus Trailer)'
    }
}

export default Demo;
