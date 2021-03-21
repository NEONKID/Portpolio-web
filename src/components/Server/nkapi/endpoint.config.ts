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
			content: `${SERVER}/v1/getfeeds`,
		},
	},

	contact: {
		send: {
			message: `${SERVER}/v1/sendMessage`,
		},
	},
};

export default config;
