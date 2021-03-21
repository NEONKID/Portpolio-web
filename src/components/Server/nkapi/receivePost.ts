import axios, { AxiosResponse, AxiosError } from 'axios';

import endpoint from './endpoint.config';

interface AuthorDetail {
	name: string;
}

interface LinkDetail {
	href: string;
	rel: string;
	type: string;
}

interface SummaryDetail {
	type: string;
	language?: string;
	base: string;
	value?: string;
}

export interface Tag {
	term: string;
	scheme?: string;
	label?: string;
}

interface TitleDetail {
	type: string;
	language?: string;
	base: string;
	value?: string;
}

export interface FeedEntry {
	author: string;
	author_detail: AuthorDetail;
	authors: Array<AuthorDetail>;
	comments: string;
	guidisLink: boolean;
	id: string;
	link: string;
	links: Array<LinkDetail>;
	published: string;
	published_parsed: Array<number>;
	summary: string;
	summary_detail: SummaryDetail;
	tags: Array<Tag>;
	title: string;
	title_details: TitleDetail;
}

export interface FeedBody {
	bozo: boolean;
	entries: Array<FeedEntry>;
	href: string;
	status: number;
	encoding: string;
	version: string;
	namespace: any;
}

export const receivePost = () => {
	return new Promise<FeedBody>((resolve, reject) => {
		axios
			.get(endpoint.blog.receive.content)
			.then((resp: AxiosResponse) => resolve(resp.data.body))
			.catch((err: AxiosError) => reject(err));
	});
};
