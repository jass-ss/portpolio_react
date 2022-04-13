import React, { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubHeader from '../common/SubHeader';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;

function Youtube() {
	const ref = useRef(null);

	const [arr, setArr] = useState([]);
	const [ele, setEle] = useState(null);
	const [newArray, setNew] = useState([]);

	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const youtube_key = 'AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM';
	const playListId = 'PLgRXT2p63sR2XX3SUYVo57tpYJxmNIhm-';
	const num = 5;
	const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;

	useEffect(() => {
		axios
			.get(youtube_url)
			.then((json) => json.data.items)
			.then((data) => setArr(data));

		//setEle(arr[0].snippet.thumbnails.standard.url);
	}, []); // 첫 렌더링때에만 데이터 가져오기.

	console.log(arr);

	useEffect(() => {
		if (arr[0]) {
			setEle(arr[0]);
			setNew(arr.slice(1, 5));
		}
	}, [arr]);

	return (
		<>
			<SubHeader img={`${path}/img/banner01.jpg`}>
				<h2>YOUTUBE</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
			<Layout name={'youtube'}>
				<div className='youtube'>
					<article className='main'>
						<img
							onClick={() => {
								setIndex(0);
								setOpen(true);
							}}
							src={ele ? ele.snippet.thumbnails.standard.url : null}
							alt=''
						/>
						<div className='txt'>
							<h1>COOKING TV SHOW</h1>
							<p>
								we sponsored a TV show with our kitchen appliances. check the
								youtube and our product
							</p>
						</div>
					</article>

					<div className='videos'>
						{newArray.map((m, idx) => {
							return (
								<img
									src={m.snippet.thumbnails.standard.url}
									key={idx}
									onClick={() => {
										setIndex(idx + 1);
										console.log(index);
										setOpen(true);
									}}></img>
							);
						})}
					</div>

					<div className='frame'>
						<span>SNAP SHOT -</span>
						<article className='pics'>
							<div className='slide'>
								<img src={`${path}/img/tv1.jpg`} alt='' />
								<img src={`${path}/img/tv2.jpg`} alt='' />
								<img src={`${path}/img/tv3.jpg`} alt='' />
								<img src={`${path}/img/tv4.jpg`} alt='' />
								<img src={`${path}/img/tv5.jpg`} alt='' />
								<img src={`${path}/img/tv6.jpg`} alt='' />
								<img src={`${path}/img/tv7.jpg`} alt='' />
							</div>

							<a href='#' className='stop'>
								STOP
							</a>
							<a href='#' className='play'>
								PLAY
							</a>
						</article>
						<FontAwesomeIcon icon={faAngleRight} className='next' />
						<FontAwesomeIcon icon={faAngleLeft} className='prev' />
					</div>
				</div>
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							`https://www.youtube.com/embed/` +
							arr[index].snippet.resourceId.videoId
						}
						frameborder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
