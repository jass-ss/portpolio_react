import React, { useEffect, useRef } from 'react';

function Gallery() {
	const frame = useRef(null);

	useEffect(() => {
		frame.current.classList.remove('on');
		frame.current.classList.add('on');
	}, []);
	return (
		<section className='content gallery' ref={frame}>
			<div className='inner'>
				<h1>Gallery</h1>
				<figure></figure>
			</div>
		</section>
	);
}

export default Gallery;
