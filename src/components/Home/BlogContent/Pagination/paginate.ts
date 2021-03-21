import _ from 'lodash';

import { FeedEntry } from '../../../Server/nkapi/receivePost';

export const paginate = (items: FeedEntry[], pageNumber: number, pageSize: number) => {
	const startIdx = (pageNumber - 1) * pageSize;

	return _(items).slice(startIdx).take(pageSize).value();
};
