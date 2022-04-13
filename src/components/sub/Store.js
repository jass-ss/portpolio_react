import React from 'react';
import SubHeader from '../common/SubHeader';

const path = process.env.PUBLIC_URL;
function Store() {
	return (
		<section className='content store'>
			<SubHeader img={`${path}/img/chrome.jpg`}>
				<h2>STORE</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
		</section>
	);
}

export default Store;
