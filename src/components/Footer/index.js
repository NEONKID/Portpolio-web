import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <small className="copyright">Designed with <FontAwesome name="heart" /> by Xiaoying Riley for developers</small>
                </div>
            </footer>
        );
    }
}

export default Footer;