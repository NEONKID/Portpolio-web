import React, { useEffect, useState } from 'react';
import { firestore } from 'firebase';

import FB from '../../../Server/firebase';
import Timeline from '../Timeline';
import * as Inject from '../../../../stores/MenuStateStore';

import './styles.css';

const useData = () => {
	const { store } = Inject.useStores();

	return {
		curlanguage: store.curlanguage,
	};
};

const Experience = () => {
	const [exp, setExp] = useState<Array<firestore.QueryDocumentSnapshot>>([]);
	const data = useData();

	useEffect(() => {
		const db = FB.firestore();

		db.collection('exp')
			.where('lang', '==', data.curlanguage)
			.get()
			.then(snapshot => {
				if (!snapshot.empty) setExp(snapshot.docs);
			});
	});

	return (
		<div className="block-content">
			<h3 className="block-title">Experience</h3>
			<Timeline category="experience" details={exp} />
		</div>
	);
};

export default Experience;
