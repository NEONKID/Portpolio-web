import Parser, { Output } from 'rss-parser';

import endpoint from './endpoint.config';

export const receivePost = () => {
	const parser = new Parser({
		defaultRSS: 2.0,
		timeout: 10000,
	});

	return new Promise<Output>((resolve, reject) => {
		parser
			.parseURL(endpoint.blog.receive.content)
			.then((feed: Output) => resolve(feed))
			.catch(err => reject(err));
	});
};
