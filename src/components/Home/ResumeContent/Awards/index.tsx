import React from 'react';

import Award from './Award';
import MIDAS from './imgs/MIDAS.jpg';
import Amathon from './imgs/Amathon.png';

const Awards = () => {
	const awardList = [MIDAS, Amathon];

	return (
		<div className="block-content">
			<h3 className="block-title">Hackathon</h3>
			<div className="row">
				{awardList.map((award, i) => {
					return <Award img={award} key={i} />;
				})}
			</div>
		</div>
	);
};

export default Awards;
