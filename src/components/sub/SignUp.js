import React from 'react';
import SubHeader from '../common/SubHeader';

const path = process.env.PUBLIC_URL;
function SignUp() {
	return (
		<section className='content sign_up'>
			<SubHeader img={`${path}/img/company2.jpg`}>
				<h2>SIGN_UP</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
		</section>
	);
}

export default SignUp;
