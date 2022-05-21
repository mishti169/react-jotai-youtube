import { useAtom } from 'jotai';
import React from 'react';
import { selectedVideoId } from '../../globalAtom';

function VideoItem(props) {
	const { currVideo } = props;
	const title = currVideo.snippet.title;
	const imgUrl = currVideo.snippet.thumbnails.default.url;
	const videoId = currVideo.id.videoId;
	const [, setVideoId] = useAtom(selectedVideoId);

	function onVideoClick() {
		setVideoId(videoId);
	}

	return (
		<div onClick={onVideoClick}>
			<img src={imgUrl} alt={title} />
			<h4>{title}</h4>
		</div>
	);
}

export default VideoItem;
