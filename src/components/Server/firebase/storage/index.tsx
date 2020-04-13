import axios from 'axios';

import fb from '..';

const storage = fb.storage().ref();

export const getThumbnailImgs = (img: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		storage
			.child(`NKHOME/images/${img}`)
			.getDownloadURL()
			.then(url => resolve(url));
	});
};

export const getPPContent = (lang: string, fileName: string) => {
	return new Promise((resolve, reject) => {
		storage
			.child(`NKHOME/${lang}/${fileName}`)
			.getDownloadURL()
			.then(url => {
				axios
					.get(url, {
						method: 'GET',
					})
					.then(res => resolve(res.data));
			});
	});
};
