import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import $ from 'jquery';
import 'jquery-rss';
import './styles.css';

class BlogRSS extends Component {
    componentDidMount() {
        this.renderFeed();
    }

    renderFeed() {
        $("#rss-feeds").rss(
            // Change this to your own rss feeds
            "http://blog.neonkid.xyz/rss",
            {
                // how many entries do you want?
                // default: 4
                // valid values: any integer
                limit: 3,
                
                // the effect, which is used to let the entries appear
                // default: 'show'
                // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
                effect: 'slideFastSynced',
                ssl: true,
                
                // outer template for the html transformation
                // default: "<ul>{entries}</ul>"
                // valid values: any string
                layoutTemplate: "<div className='item'>{entries}</div>",
                
                // inner template for each entry
                // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
                // valid values: any string
                entryTemplate: '<h3 className="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>' 
            }
        );
    }

    render() {
        return (
            <aside className="blog aside section">
                <div className="section-inner">
                    <h2 className="heading">
                        <FormattedMessage id='ba-title'></FormattedMessage>
                    </h2>
                    <div id="rss-feeds" className="content"></div>
                </div>
            </aside>
        );
    }
}

export default BlogRSS;