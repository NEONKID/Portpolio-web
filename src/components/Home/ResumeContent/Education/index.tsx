import React, { useState, useEffect } from 'react';
import Firebase from 'firebase';

import { getEduInfo } from '../../../Server/firebase/firestore';
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
	const [edu, setEdu] = useState<Array<Firebase.firestore.QueryDocumentSnapshot>>([]);
	const data = useData();

	useEffect(() => {
		getEduInfo(data.curlanguage).then((docs) => {
			setEdu(docs);
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
