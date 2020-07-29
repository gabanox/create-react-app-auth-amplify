import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

// Video player component docs
// https://www.npmjs.com/package/react-player
const VideoPlayer = (props) => {
    return (
        <ReactPlayer url={props.videoUrl} />
    )
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired
}

<<<<<<< HEAD
export default VideoPlayer;
=======
export default VideoPlayer;
>>>>>>> origin/feature/video-player-protected-route
