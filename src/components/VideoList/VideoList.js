import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

function VideoList(props) {
	const { videoList } = props;
	return (
		<>
			{videoList.map(function (currVideo) {
				return <VideoItem key={currVideo.id.videoId} currVideo={currVideo} />;
			})}
		</>
	);
}
export default VideoList;
