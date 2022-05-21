import React from 'react';
import ReactPlayer from 'react-player';

function VideoDetails(props) {
	const { videoId } = props;
	return (
		<div>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${videoId}`}
				controls
			/>
		</div>
	);
}
export default VideoDetails;
