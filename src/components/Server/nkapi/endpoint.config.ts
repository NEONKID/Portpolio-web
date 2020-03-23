const SERVER = 'https://apis.neonkid.xyz';
const API_PREFIX = 'api';

interface Config {
	contact: {
		send: {
			message: string;
		};
	};
}

const config: Config = {
	contact: {
		send: {
			message: `${SERVER}/${API_PREFIX}/v1/sendMessage`,
		},
	},
};

export default config;
