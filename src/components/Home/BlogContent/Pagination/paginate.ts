import _ from 'lodash';

export const paginate = (items: Object[], pageNumber: number, pageSize: number) => {
	const startIdx = (pageNumber - 1) * pageSize;

	return _(items)
		.slice(startIdx)
		.take(pageSize)
		.value();
};
