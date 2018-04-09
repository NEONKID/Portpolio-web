import React from 'react';
import Info from './Info';
import SkillInfo from './SkillInfo';
import EduInfo from './EduInfo';
import LangInfo from './LangInfo';
import ConfList from './ConfList';
import BlogRSS from './BlogRSS';

import './styles.css';

const Secondary = () => {
    return (
        <div className="secondary col-md-4 col-sm-12 col-xs-12">
            <Info />
            <SkillInfo />
            <EduInfo />
            <LangInfo />
            <ConfList />
            <BlogRSS />
        </div>
    );
}

export default Secondary;