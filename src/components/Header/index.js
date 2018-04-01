import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './styles.css';
import Profile from './img/profile.png';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">                       
                    <img className="profile-image img-responsive pull-left" 
                        src={Profile} alt="James Lee" />
                    <div className="profile-content pull-left">
                        <h1 className="name">Kwang Soo Jeong</h1>
                        <h2 className="desc">Junior Developer</h2>   
                        <ul className="social list-inline">
                            <li><a href="//twitter.com/clax1412"><FontAwesome name='twitter'/></a></li>                   
                            <li><a href="//github.com/neonkid"><FontAwesome name='github-alt'/></a></li>                                  
                        </ul> 
                    </div>
                    <Button color="success" className="pull-right">
                        <FontAwesome name='paper-plane'/> Contact Me
                    </Button>              
                </div>
            </header>
        );
    }
}

export default Header;