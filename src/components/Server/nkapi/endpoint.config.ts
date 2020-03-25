const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';

const BLOG_URL = 'https://blog.neonkid.xyz/rss';
const SERVER = 'https://apis.neonkid.xyz';

interface Config {
	blog: {
		receive: {
			content: string;
		};
	};

	contact: {
		send: {
			message: string;
		};
	};
}

const config: Config = {
	blog: {
		receive: {
			content: `${CORS_PROXY}/${BLOG_URL}`,
		},
	},

	contact: {
		send: {
			message: `${SERVER}/v1/sendMessage`,
		},
	},
};

export default config;
