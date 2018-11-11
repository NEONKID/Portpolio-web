import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage } from 'react-intl';

const Info = () => {
    const blogUrl = '//blog.neonkid.xyz';

    return (
        <aside className="info aside section">
            <div className="section-inner">
                <h2 className="heading sr-only">Basic Information</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li><FontAwesome name="map-marker" /><span className="sr-only">Location:</span><FormattedMessage id='my-loc'></FormattedMessage></li>
                        <li><FontAwesome name="envelope-o" /><span className="sr-only">Email:</span><a href="mailto:contact@neonkid.xyz">contact@neonkid.xyz</a></li>
                        <li><FontAwesome name="link" /><span className="sr-only">Website:</span><a href={blogUrl}>https://blog.neonkid.xyz</a></li>
                    </ul>
                </div> 
            </div>             
        </aside>
    );
}

export default Info;