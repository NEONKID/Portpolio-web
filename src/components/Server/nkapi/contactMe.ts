import axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './endpoint.config';

export const sendMsg = (name: string, email: string, msg: string): Promise<AxiosResponse & AxiosError> => {
	return new Promise((resolve, reject) => {
		axios
			.post(
				endpoint.contact.send.message,
				{
					name: name,
					email: email,
					message: msg,
				},
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				},
			)
			.then((resp: AxiosResponse) => resolve(resp.data))
			.catch((err: AxiosError) => reject(err));
	});
};
