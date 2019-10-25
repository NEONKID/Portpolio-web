import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Parser, { Item } from 'rss-parser';

import Post from './Post';

import * as Inject from '../../../stores/MenuStateStore';

import './styles.css';

interface BCState {
	data: any;
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
		};

		const parser = new Parser({
			defaultRSS: 4,
			timeout: 1500,
		});
		const CORSFree = 'https://cors-anywhere.herokuapp.com/';

		parser.parseURL(CORSFree + 'https://blog.neonkid.xyz/rss').then(feed => {
			this.setState({ data: feed.items });
		});
	}

	prettyContent(content: any) {
		if (typeof content === 'string') {
			return content
				.replace(/(<([^>]+)>)/gi, '')
				.replace('(adsbygoogle = window.adsbygoogle || []).push({});', '')
				.replace('&nbsp;', '')
				.substring(5, 250);
		} else return '';
	}

	render() {
		const { blogState }: any = this.props;
		const style = blogState ? 'content-blocks blog showx' : 'content-blocks blog';

		return (
			<div className={style}>
				<section className="content">
					<div className="block-content">
						<h3 className="block-title">N.K Lab</h3>
						<div className="row">
							<div className="col-md-10 mx-auto">
								<div className="post">
									{this.state.data.map((item: Item, i: number) => {
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
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default BlogContent;
