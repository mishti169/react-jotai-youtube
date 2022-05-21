import './App.css';
import React from 'react';
import { selectedVideoId, getVideoList } from './globalAtom';
import { useAtom } from 'jotai';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './components/VideoDetails/VideoDetails';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	const [videoList] = useAtom(getVideoList);

	const [videoId] = useAtom(selectedVideoId);

	return (
		<div className='playerContainer'>
			<SearchBar />
			<VideoDetails videoId={videoId} />
			<VideoList videoList={videoList || []} />
		</div>
	);
}

export default App;
