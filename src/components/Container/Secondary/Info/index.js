import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Info extends Component {
    render() {
        return (
            <aside className="info aside section">
                <div className="section-inner">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><FontAwesome name="map-marker" /><span className="sr-only">Location:</span>Cheonan, South Korea</li>
                            <li><FontAwesome name="envelope-o" /><span className="sr-only">Email:</span><a href="mailto:contact@neonkid.xyz">contact@neonkid.xyz</a></li>
                            <li><FontAwesome name="link" /><span className="sr-only">Website:</span><a href="//blog.neonkid.xyz">http://blog.neonkid.xyz</a></li>
                        </ul>
                    </div> 
                </div>             
            </aside>
        );
    }
}

export default Info;