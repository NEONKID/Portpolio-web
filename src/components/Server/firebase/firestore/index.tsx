import Firebase from 'firebase';

import fb from '..';

const db = fb.firestore();

export const getEduInfo = (curLang: string): Promise<Array<Firebase.firestore.QueryDocumentSnapshot>> => {
	return new Promise((resolve, reject) => {
		db.collection('edu')
			.where('lang', '==', curLang)
			.get()
			.then(snapshot => {
				if (!snapshot.empty) resolve(snapshot.docs);
			});
	});
};

export const getExp = (curLang: string): Promise<Array<Firebase.firestore.QueryDocumentSnapshot>> => {
	return new Promise((resolve, reject) => {
		db.collection('exp')
			.where('lang', '==', curLang)
			.get()
			.then(snapshot => {
				if (!snapshot.empty) resolve(snapshot.docs);
			});
	});
};
