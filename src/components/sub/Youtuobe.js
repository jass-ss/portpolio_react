import React, { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';

const path = process.env.PUBLIC_URL;

function Youtuobe() {
	const ref = useRef(null);

	const [arr, setArr] = useState([]);

	const key = 'AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM';
	const num = 25;
	const url1 = 'PLgRXT2p63sR0DF5JXNztXpg5-udSHdQUG';
	const url2 = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${url1}&maxResults=${num}`;

	useEffect(() => {
		axios
			.get(url2)
			.then((json) => json.data.items)
			.then((data) => data.slice(19))
			.then((data) => setArr(data));

		ref.current.classList.add('comm');
	}, []); // 첫 렌더링때에만 데이터 가져오기.

	console.log(arr);
	const fecthCommercial = () => {
		if (ref.current.classList.contains('comm')) return;
		axios
			.get(url2)
			.then((json) => json.data.items)
			.then((data) => data.slice(19))
			.then((data) => setArr(data));
		ref.current.classList.add('comm');
	};
	const fecthReview = () => {
		if (!ref.current.classList.contains('comm')) return;
		axios
			.get(url2)
			.then((json) => json.data.items)
			.then((data) => data.slice(9, 18))
			.then((data) => setArr(data));
		ref.current.classList.remove('comm');
	};

	return (
		<Layout name={'youtube'}>
			<article onClick={fecthCommercial}>
				<img src={`${path}/img/thumbnail1.jpg`} alt='' />
				<p>CHECK our donut commercial</p>
			</article>
			<article onClick={fecthReview}>
				<img src={`${path}/img/thumbnail2.jpg`} alt='' />
				<p>CHECK youtuber's donut REVIEW</p>
			</article>
			<div className='data' ref={ref}>
				{arr.map((m, idx) => {
					const pic = m.snippet.thumbnails.high.url;
					const title = m.snippet.thumbnails.title;
					return (
						<article key={idx}>
							<iframe
								width='100%'
								height='100%'
								src={`https://www.youtube.com/embed/${m.snippet.resourceId.videoId}`}
								frameborder='0'
								allowFullScreen></iframe>
							<p>{title}</p>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Youtuobe;
