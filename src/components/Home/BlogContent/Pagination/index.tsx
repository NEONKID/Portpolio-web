/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';

import './styles.css';

type pagProps = {
	itemsCnt: number;
	pageSize: number;
	curPage: number;
	onPageChange: Function;
};

const Pagination = (props: pagProps) => {
	const { itemsCnt, pageSize, curPage, onPageChange } = props;
	const pageCnt = Math.ceil(itemsCnt / pageSize);

	if (pageCnt === 1) return null;

	const pages = _.range(1, pageCnt + 1);

	return (
		<div className="text-center">
			<ul className="pagination">
				<li className="page-item">
					<a
						className="page-link"
						onClick={() => {
							if (curPage > 1) onPageChange(curPage - 1);
						}}
					>
						Previous
					</a>
				</li>
				{pages.map(page => (
					<li key={page} className={page === curPage ? 'page-item active' : 'page-item'}>
						<a className="page-link" onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
				<li className="page-item">
					<a
						className="page-link"
						onClick={() => {
							if (curPage < pages.length) onPageChange(curPage + 1);
						}}
					>
						Next
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
