import React, { Component } from 'react';

import About from './About';
import Representative from './Representative';
import CodeWall from './CodeWall';
import Github from './Github';

class Primary extends Component {
    render() {
        return (
            <div className="primary col-md-8 col-sm-12 col-xs-12">
				<About />
				<Representative />
                <CodeWall />
                <Github />
			</div>
        );
    }
}

export default Primary;