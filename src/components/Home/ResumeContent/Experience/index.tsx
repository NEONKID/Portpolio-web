import React, { useEffect, useState } from 'react';
import Firebase from 'firebase';

import { getExp } from '../../../Server/firebase/firestore';
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
	const [exp, setExp] = useState<Array<Firebase.firestore.QueryDocumentSnapshot>>([]);
	const data = useData();

	useEffect(() => {
		getExp(data.curlanguage).then((docs) => {
			setExp(docs);
		});
	}, [data.curlanguage]);

	return (
		<div className="block-content">
			<h3 className="block-title">Experience</h3>
			<Timeline category="experience" details={exp} />
		</div>
	);
};

export default Experience;
