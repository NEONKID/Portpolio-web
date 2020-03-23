import React, { useState, useEffect } from 'react';
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

const Education = () => {
	const [edu, setEdu] = useState<Array<firestore.QueryDocumentSnapshot>>([]);
	const data = useData();

	useEffect(() => {
		const db = FB.firestore();

		db.collection('edu')
			.where('lang', '==', data.curlanguage)
			.get()
			.then(snapshot => {
				if (!snapshot.empty) setEdu(snapshot.docs);
			});
	});

	return (
		<div className="block-content">
			<h3 className="block-title">Education</h3>
			<Timeline category="education" details={edu} />
		</div>
	);
};

export default Education;
