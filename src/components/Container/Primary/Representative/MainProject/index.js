import React, { Component } from 'react';
import { Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import HomeIoT from '../img/projects/project-featured.png';

class MainProject extends Component {
    render() {
        return (
            <div className="item featured">
                <h3 className="title">HomeIoT</h3>
                <p className="summary">Arduino, Windows Server, SmartPhone을 사용한 가정용 IoT 시스템</p>
                <div className="featured-image">
                    <a>
                        <img className="img-responsive project-image" src={HomeIoT} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">New</div>
                    </div>
                </div>                     
                <div className="desc text-left">                                    
                    <p>You can promote your main project here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
                </div>        
                <Button color="info" className="btn-cta-secondary"><FontAwesome name='thumbs-o-up' /> Back my project</Button>                 
            </div>
        );
    }
}

export default MainProject;