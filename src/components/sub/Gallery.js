import React, { useEffect, useRef, useState } from 'react';
import Link from '../common/Layout';
import axios from 'axios';

function Gallery() {
	const key = 'e565f81533120f8f890f47cdeb951ff4';
	const user = '72157720587585728';
	const method = 'flickr.galleries.getPhotos';
	const page = 12;
	const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${key}&per_page=${page}&format=json&nojsoncallback=1&gallery_id=${user}`;

	const [arr, setArr] = useState([]);
	useEffect(() => {
		axios.get(url).then((json) => setArr(json.data.photos.photo));
	});

	return (
		<Link name={'gallery'}>
			<div className='g_list'>
				{arr.map((a, idx) => {
					return (
						<article key={idx}>
							<img
								src={`https://live.staticflickr.com/${a.server}/${a.id}_${a.secret}_m.jpg`}
								alt=''
							/>
							<h2>{a.title}</h2>
							<p>{a.id}</p>
						</article>
					);
				})}
			</div>
		</Link>
	);
}

export default Gallery;
