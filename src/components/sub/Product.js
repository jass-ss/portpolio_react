import React from 'react';
import SubHeader from '../common/SubHeader';

const path = process.env.PUBLIC_URL;

function Product() {
	return (
		<section className='content product'>
			<SubHeader img={`${path}/img/banner14.jpg`}>
				<h2>PRODUCT</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
		</section>
	);
}

export default Product;
