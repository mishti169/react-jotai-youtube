import './App.css';
import React from 'react';
import { selectedVideoId, getVideoList } from './globalAtom';
import { useAtom } from 'jotai';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './components/VideoDetails/VideoDetails';
import SearchBar from './components/SearchBar/SearchBar';

const x = [
	{
		kind: 'youtube#searchResult',
		etag: 'cRig9QYujgeuKHtb2HAyn9evh4M',
		id: {
			kind: 'youtube#video',
			videoId: 'LVJAip8ybRU',
		},
		snippet: {
			publishedAt: '2011-04-21T14:35:37Z',
			channelId: 'UCq-Fj5jknLsUf-MWSy4_brA',
			title: 'Mudhi Mudhi Ittefaq Se [Full Song] - Paa',
			description:
				'Song - Mudhi Mudhi Ittefaq Se Film - Paa Singer - Shilpa Rao Lyricist - Swanand Kirkire Music Director - Ilaiyaraja Artist - Amitabh ...',
			thumbnails: {
				default: {
					url: 'https://i.ytimg.com/vi/LVJAip8ybRU/default.jpg',
					width: 120,
					height: 90,
				},
				medium: {
					url: 'https://i.ytimg.com/vi/LVJAip8ybRU/mqdefault.jpg',
					width: 320,
					height: 180,
				},
				high: {
					url: 'https://i.ytimg.com/vi/LVJAip8ybRU/hqdefault.jpg',
					width: 480,
					height: 360,
				},
			},
			channelTitle: 'T-Series',
			liveBroadcastContent: 'none',
			publishTime: '2011-04-21T14:35:37Z',
		},
	},
	{
		kind: 'youtube#searchResult',
		etag: 'l4aNnVH9kMSCob6vh0D2b8UzwZM',
		id: {
			kind: 'youtube#video',
			videoId: 'th7Nbf2mH6M',
		},
		snippet: {
			publishedAt: '2011-04-21T14:36:25Z',
			channelId: 'UCq-Fj5jknLsUf-MWSy4_brA',
			title: 'Hichki Hichki [Full Song] - Paa',
			description:
				'Song - Hichki Hichki Film - Paa Singer - Sunidhi Chauhan Lyricist - Swanand Kirkire Music Director - Ilaiyaraja Artist - Amitabh ...',
			thumbnails: {
				default: {
					url: 'https://i.ytimg.com/vi/th7Nbf2mH6M/default.jpg',
					width: 120,
					height: 90,
				},
				medium: {
					url: 'https://i.ytimg.com/vi/th7Nbf2mH6M/mqdefault.jpg',
					width: 320,
					height: 180,
				},
				high: {
					url: 'https://i.ytimg.com/vi/th7Nbf2mH6M/hqdefault.jpg',
					width: 480,
					height: 360,
				},
			},
			channelTitle: 'T-Series',
			liveBroadcastContent: 'none',
			publishTime: '2011-04-21T14:36:25Z',
		},
	},
	{
		kind: 'youtube#searchResult',
		etag: 'G-_Xok0uAWENbkHxNg1Kq0hU4C0',
		id: {
			kind: 'youtube#video',
			videoId: 'ESQJh7dFmc8',
		},
		snippet: {
			publishedAt: '2011-04-21T14:34:58Z',
			channelId: 'UCq-Fj5jknLsUf-MWSy4_brA',
			title:
				'Gumm Summ Gumm [Full Song] | Paa | Amitabh Bachchan, Abhishek Bachchan',
			description:
				'Subscribe our channel http://www.youtube.com/tseries Like us: http://www.facebook.com/tseriesmusic Follow us: ...',
			thumbnails: {
				default: {
					url: 'https://i.ytimg.com/vi/ESQJh7dFmc8/default.jpg',
					width: 120,
					height: 90,
				},
				medium: {
					url: 'https://i.ytimg.com/vi/ESQJh7dFmc8/mqdefault.jpg',
					width: 320,
					height: 180,
				},
				high: {
					url: 'https://i.ytimg.com/vi/ESQJh7dFmc8/hqdefault.jpg',
					width: 480,
					height: 360,
				},
			},
			channelTitle: 'T-Series',
			liveBroadcastContent: 'none',
			publishTime: '2011-04-21T14:34:58Z',
		},
	},
	{
		kind: 'youtube#searchResult',
		etag: 'sZTxrnNuGP7R0V0FqlYxR-uASxc',
		id: {
			kind: 'youtube#video',
			videoId: 'fQNuSVOWfLQ',
		},
		snippet: {
			publishedAt: '2010-08-13T06:08:26Z',
			channelId: 'UCqZR7KVVsZRSfezZKJllxVQ',
			title: 'Paa Movie Trailer',
			description: '',
			thumbnails: {
				default: {
					url: 'https://i.ytimg.com/vi/fQNuSVOWfLQ/default.jpg',
					width: 120,
					height: 90,
				},
				medium: {
					url: 'https://i.ytimg.com/vi/fQNuSVOWfLQ/mqdefault.jpg',
					width: 320,
					height: 180,
				},
				high: {
					url: 'https://i.ytimg.com/vi/fQNuSVOWfLQ/hqdefault.jpg',
					width: 480,
					height: 360,
				},
			},
			channelTitle: 'Reliance Entertainment',
			liveBroadcastContent: 'none',
			publishTime: '2010-08-13T06:08:26Z',
		},
	},
	{
		kind: 'youtube#searchResult',
		etag: 'O5sIEXVsNh2PRXyPzUbj1y4sb28',
		id: {
			kind: 'youtube#video',
			videoId: 'jtd5FsA3rYI',
		},
		snippet: {
			publishedAt: '2010-08-19T07:07:08Z',
			channelId: 'UCqZR7KVVsZRSfezZKJllxVQ',
			title: 'Paa - Vishnu, Auro&#39;s Best Friend',
			description: '',
			thumbnails: {
				default: {
					url: 'https://i.ytimg.com/vi/jtd5FsA3rYI/default.jpg',
					width: 120,
					height: 90,
				},
				medium: {
					url: 'https://i.ytimg.com/vi/jtd5FsA3rYI/mqdefault.jpg',
					width: 320,
					height: 180,
				},
				high: {
					url: 'https://i.ytimg.com/vi/jtd5FsA3rYI/hqdefault.jpg',
					width: 480,
					height: 360,
				},
			},
			channelTitle: 'Reliance Entertainment',
			liveBroadcastContent: 'none',
			publishTime: '2010-08-19T07:07:08Z',
		},
	},
];
function App() {
	const [videoList] = useAtom(getVideoList);

	const [videoId] = useAtom(selectedVideoId);

	return (
		<div className='playerContainer'>
			<SearchBar />
			<VideoDetails videoId={videoId} />
			<VideoList videoList={videoList || x} />
		</div>
	);
}

export default App;
