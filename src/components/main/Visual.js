import React, { useState } from 'react';
import Slide from './Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const arr = [
	'donut2',
	'donut3',
	'donut4',
	'donut5',
	'donut6',
	'donut7',
	'donut8',
	'donut9',
];

function Visual() {
	let [count, setCount] = useState(0);
	return (
		<figure>
			<h1>YOUR NEW STYLE</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
				rerum, quae ea officiis atque temporibus!
			</p>
			<div className='circle'>
				<div className='wrap' style={{ transform: `rotate(${count * 45}deg)` }}>
					{arr.map((a, idx) => {
						return <Slide data={a} key={idx} number={idx} />;
					})}
				</div>
			</div>
			<a href='#' className='up' onClick={() => setCount(++count)}>
				<FontAwesomeIcon icon={faAngleUp} className='icon_up' />
			</a>
			<a href='#' className='down' onClick={() => setCount(--count)}>
				<FontAwesomeIcon icon={faAngleDown} className='icon_down' />
			</a>
		</figure>
	);
}

export default Visual;
