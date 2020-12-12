import React, { useEffect, useState, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { Item, Output } from 'rss-parser';
import Loader from 'react-loader-spinner';

import Pagination from './Pagination';
import Post from './Post';
import { paginate } from './Pagination/paginate';
import { receivePost } from '../../Server/nkapi/receivePost';

import * as Inject from '../../../stores/MenuStateStore';

const useData = () => {
	const { store } = Inject.useStores();

	return {
		blogState: store.blogState,
	};
};

const BlogContent = () => {
	const data = useData();

	const [isLoading, setIsLoading] = useState(true);
	const [feeds, setFeeds] = useState<Item[]>([]);
	const [pageSize] = useState(3);
	const [curPage, setCurPage] = useState(1);
	const [itemCnt, setItemCnt] = useState(0);

	const style = data.blogState ? 'content-blocks blog showx' : 'content-blocks blog';

	const pageChange = (page: number) => {
		setCurPage(page);
	};

	const prettyContent = (content: any) => {
		if (typeof content === 'string') {
			return content
				.replace(/(<([^>]+)>)/gi, '')
				.replace('(adsbygoogle = window.adsbygoogle || []).push({});', '')
				.replace('&nbsp;', '')
				.substring(5, 250);
		} else return '';
	};

	let curPost: ReactElement[] = [
		<div className="text-center" style={{ paddingTop: '4em', paddingBottom: '4em' }}>
			<Loader type="Grid" color="#727272" height={100} width={100}></Loader>
		</div>,
	];

	useEffect(() => {
		if (data.blogState) {
			setIsLoading(true);

			receivePost()
				.then((feed: Output<Item>) => {
					setFeeds(feed.items || []);
					setItemCnt(feeds.length);
				})
				.catch((err) => console.log(err))
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [data.blogState, feeds.length]);

	const posts = paginate(feeds, curPage, pageSize);

	if (!isLoading) {
		curPost = posts.map((item: Item, i: number) => {
			let desc = prettyContent(item.content);
			return (
				<Post
					title={item.title}
					pubDate={item.pubDate}
					categories={item.categories}
					desc={desc}
					address={item.guid}
					key={i}
				/>
			);
		});
	}

	return (
		<div className={style}>
			<section className="content">
				<div className="block-content">
					<h3 className="block-title">N.K Lab</h3>
					<div className="row">
						<div className="col-md-10 mx-auto">
							<div className="post">{curPost}</div>
							<Pagination
								pageSize={pageSize}
								itemsCnt={itemCnt}
								curPage={curPage}
								onPageChange={pageChange}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default observer(BlogContent);
