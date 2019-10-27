import React from 'react';
import Moment from 'react-moment';

import './styles.css';

type PostProps = {
	title?: string;
	pubDate?: string;
	categories?: string[];
	address?: string;
	desc?: string;
};

const Post = ({ title, pubDate, categories, address, desc }: PostProps) => {
	const category = Array.isArray(categories) ? categories[0] : '';

	return (
		<div className="post">
			<div className="post-title">
				<a className="open-post" href={address}>
					<h2>{title}</h2>
				</a>
				<p className="post-info">
					<span className="post-author">Posted by Neon K.I.D</span>
					<span className="slash"></span>
					<span className="post-date">
						<Moment format="YYYY. MM. DD">{pubDate}</Moment>
					</span>
					<span className="slash"></span>
					<span className="post-category">{category}</span>
				</p>
			</div>
			<div className="post-body">
				<p>{desc}</p>
				<a className="btn open-post" href={address}>
					Read More
				</a>
			</div>
		</div>
	);
};

export default Post;
