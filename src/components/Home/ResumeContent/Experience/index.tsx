import React, { useEffect, useState } from 'react';
import { firestore } from 'firebase';

import FB from '../../../Server';
import Timeline from '../Timeline';

import './styles.css';

const Experience = () => {
	const [exp, setExp] = useState<Array<firestore.QueryDocumentSnapshot>>([]);

	useEffect(() => {
		const db = FB.firestore();
		db.collection('exp')
			.get()
			.then(snapshot => {
				if (!snapshot.empty) setExp(snapshot.docs);
			});
	}, []);

	return (
		<div className="block-content">
			<h3 className="block-title">Experience</h3>
			<Timeline category="experience" details={exp} />
		</div>
	);
};

export default Experience;
