import React from 'react';
import ReactPlayer from 'react-player';
import './VideoDetails.css';

function VideoDetails(props) {
	const { videoId } = props;
	return (
		<div className='videoDetailsContainer'>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${videoId}`}
				controls
			/>
		</div>
	);
}
export default VideoDetails;
