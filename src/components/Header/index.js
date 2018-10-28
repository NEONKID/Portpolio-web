import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import Social from './Social';
import './styles.css';
import Profile from './img/profile.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialList: [{
                icon: 'twitter',
                link: '//twitter.com/clax1412'
            }, {
                icon: 'github-alt',
                link: '//github.com/neonkid'
            }]
        }
    }

    render() {
        return (
            <header className="header">
                <div className="container">                       
                    <img className="profile-image img-responsive pull-left" width="200" height="150" 
                        src={Profile} alt="Kwang Soo Jeong" />
                    <div className="profile-content pull-left">
                        <h1 className="name">Kwang Soo Jeong</h1>
                        <h2 className="desc">Junior Data Engineer</h2>   
                        <ul className="social list-inline">
                            {this.state.socialList.map((social, i) => {
                                return (<Social data={social}  key={i} />);
                            })}                                  
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