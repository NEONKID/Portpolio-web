import React, { Component } from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';

class Skill extends Component {
    componentDidMount() {
        this.renderSkillbar();
        // this.renderSkilltip();
    }

    renderSkillbar() {
        $('.level-bar-inner').css('width', '0');
        
        $(window).on('load', function() {
            $('.level-bar-inner').each(function() {
                var itemWidth = $(this).data('level');
                $(this).animate({
                    width: itemWidth
                }, 800);
            });
        });
    }

    renderSkilltip() {
        // Todo: 현재 Tooltip이 동작하지 않음, 원인을 찾아야 함.
        $('.level-label').tooltip();
    }

    render() {
        const data = this.props.data;

        return (
            <div className="item">
                <h3 className="level-title">{ data.title }
                    <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title={ data.tooltip }>
                        { data.grade }
                    </span>
                </h3>
                <div className="level-bar">
                    <div className="level-bar-inner" data-level={ data.level }></div>                                      
                </div>                                
            </div>
        );
    }
}

Skill.propTypes = {
    data: PropTypes.object
}

Skill.defaultProps = {
    data: {
        title: 'Python',
        tooltip: 'Expert comment...',
        level: '50%',
        grade: 'Pro'
    }
}

export default Skill;