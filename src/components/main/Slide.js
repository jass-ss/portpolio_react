import React from 'react';

const path = process.env.PUBLIC_URL;

function Slide({ data, number }) {
	const rotate = {
		transform: `rotate(${number * 45}deg) translateY(-90vmin) `,
	};
	console.log(rotate);
	return (
		<>
			<img src={`${path}/img/${data}.png`} alt='donut' style={rotate} />
		</>
	);
}

export default Slide;
