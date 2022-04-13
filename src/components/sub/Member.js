import React, { useEffect, useState } from 'react';
import axios from 'axios';

const path = process.env.PUBLIC_URL;
function Member() {
	//const frame = useRef(null);
	const [members, setMember] = useState([]);
	useEffect(() => {
		//frame.current.classList.remove('on');
		//frame.current.classList.add('on');
		axios
			.get(`${path}/DB/member.json`)
			.then((json) => setMember(json.data.data));
	}, []);

	//console.log(member);

	return (
		<div className='member'>
			<div className='list'>
				<p>MEMBER</p>
				{members.map((a, idx) => {
					return (
						<article key={idx}>
							<img src={`${path}/img/${a.pic}`} alt='' />
							<div className='box'>
								<p>{a.name}</p>
								<p>{a.position}</p>
							</div>
						</article>
					);
				})}
			</div>
			<div className='teams'>
				<p>TEAMS</p>
				<article>
					<img src={`${path}/img/inform.jpg`} alt='' />
					<p>INFORMATION TECHNOLOGY</p>
				</article>
				<article>
					<img src={`${path}/img/research.jpg`} alt='' />
					<p>RESEARCH KNOWLEDGE</p>
				</article>
				<article>
					<img src={`${path}/img/design.jpg`} alt='' />
					<p>DESIGN INDUSTRIALIZATION</p>
				</article>
				<article>
					<img src={`${path}/img/customer.jpg`} alt='' />
					<p>CUSTOMER EXPERIENCE</p>
				</article>
			</div>
		</div>
		/*<section className='content member' ref={frame}>
			<div className='inner'>
				<h1>Member</h1>
				<figure></figure>
			</div>
		</section>*/
	);
}

export default Member;
