import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideoList.css';

function VideoList(props) {
	const { videoList } = props;
	return (
		<div className='videoListContainer'>
			{videoList.map(function (currVideo) {
				return <VideoItem key={currVideo.id.videoId} currVideo={currVideo} />;
			})}
		</div>
	);
}
export default VideoList;
