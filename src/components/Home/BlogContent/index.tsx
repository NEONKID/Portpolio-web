import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Item } from 'rss-parser';

import Pagination from './Pagination';
import Post from './Post';
import { paginate } from './Pagination/paginate';
import { receivePost } from '../../Server/nkapi/receivePost';

import * as Inject from '../../../stores/MenuStateStore';

interface BCState {
	data: any;
	pageSize: number;
	itemCnt: number;
	curPage: number;
}

interface BCProps {}

@inject((stores: Inject.Props) => ({
	blogState: stores.store.blogState,
}))
@observer
class BlogContent extends Component<BCProps, BCState> {
	constructor(props: BCProps) {
		super(props);

		this.state = {
			data: [],
			pageSize: 3,
			curPage: 1,
			itemCnt: 0,
		};
	}

	componentDidMount() {
		receivePost().then(feed => {
			this.setState({ data: feed.items });
			this.setState({ itemCnt: this.state.data.length });
		});
	}

	prettyContent = (content: any) => {
		if (typeof content === 'string') {
			return content
				.replace(/(<([^>]+)>)/gi, '')
				.replace('(adsbygoogle = window.adsbygoogle || []).push({});', '')
				.replace('&nbsp;', '')
				.substring(5, 250);
		} else return '';
	};

	hanldePageChange = (page: number) => {
		this.setState({ curPage: page });
	};

	render() {
		const { blogState }: any = this.props;
		const style = blogState ? 'content-blocks blog showx' : 'content-blocks blog';
		const posts = paginate(this.state.data, this.state.curPage, this.state.pageSize);

		return (
			<div className={style}>
				<section className="content">
					<div className="block-content">
						<h3 className="block-title">N.K Lab</h3>
						<div className="row">
							<div className="col-md-10 mx-auto">
								<div className="post">
									{posts.map((item: Item, i: number) => {
										let desc = this.prettyContent(item.content);
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
									})}
								</div>
								<Pagination
									itemsCnt={this.state.itemCnt}
									pageSize={this.state.pageSize}
									curPage={this.state.curPage}
									onPageChange={this.hanldePageChange}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default BlogContent;
