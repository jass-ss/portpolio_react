import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import SubHeader from '../common/SubHeader';
import Popup from '../common/Popup';

import axios from 'axios';

const path = process.env.PUBLIC_URL;

function Gallery() {
	const key = 'e565f81533120f8f890f47cdeb951ff4';
	const user = '72157720587585728';
	const method = 'flickr.galleries.getPhotos';
	const page = 12;
	const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${key}&per_page=${page}&format=json&nojsoncallback=1&gallery_id=${user}`;

	const [open, setOpen] = useState(false);
	const [arr, setArr] = useState([]);
	const [index, setIndex] = useState('');
	useEffect(() => {
		axios.get(url).then((json) => setArr(json.data.photos.photo));
	});

	return (
		<>
			<SubHeader img={`${path}/img/banner.jpg`}>
				<h2>GALLERY</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
			<Layout name={'gallery'}>
				<div className='g_list'>
					{arr.map((a, idx) => {
						return (
							<article key={idx}>
								<img
									src={`https://live.staticflickr.com/${a.server}/${a.id}_${a.secret}_m.jpg`}
									alt=''
									onClick={() => {
										setIndex(idx);
										setOpen(true);
									}}
								/>
								<h2>{a.title}</h2>
								<p>{a.id}</p>
							</article>
						);
					})}
				</div>
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${arr[index].server}/${arr[index].id}_${arr[index].secret}_m.jpg`}
						alt=''
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Gallery;
