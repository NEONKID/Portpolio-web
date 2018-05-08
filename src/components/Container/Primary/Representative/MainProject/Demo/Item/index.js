import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class Item extends React.Component {
    render() {
        const opts = {
            height: 600,
            width: 830,
            playerVars: {   // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        }

        return (
            <div>
                <YouTube
                    videoId={this.props.pvName}
                    opts={opts} />
            </div>
        )
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
    
}

Item.propTypes = {
    pvName: PropTypes.string
}

export default Item;