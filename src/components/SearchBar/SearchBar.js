import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { getVideoList, selectedVideoId } from '../../globalAtom';

function SearchBar() {
	const [, setVideoList] = useAtom(getVideoList);
	const [, setVideoId] = useAtom(selectedVideoId);
	const [inputVal, setInputVal] = useState('');

	async function getDataFromApi() {
		const res = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputVal}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
		);
		setVideoList(res.data.items);
		setVideoId(res.data.items[0].id.videoId);
	}
	function changeInputValue(event) {
		setInputVal(event.target.value);
	}

	return (
		<div>
			<input type='search' value={inputVal} onChange={changeInputValue} />
			<button type='submit' onClick={getDataFromApi}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
