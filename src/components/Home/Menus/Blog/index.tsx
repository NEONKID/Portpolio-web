import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import * as Inject from '../../../../stores/MenuStateStore';
import './styles.css';

@inject((stores: Inject.Props) => ({
	showBlogContent: stores.store.showBlogContent,
	blogState: stores.store.blogState,
}))
@observer
class Blog extends Component {
	render() {
		const { showBlogContent, blogState }: any = this.props;
		const style = blogState ? 'blog menu-item active' : 'blog menu-item';

		return (
			<div className="blog-block menu-block" onClick={showBlogContent}>
				<div className="blog-block-container">
					<h2 className={style}>Blog</h2>
				</div>
			</div>
		);
	}
}

export default Blog;
