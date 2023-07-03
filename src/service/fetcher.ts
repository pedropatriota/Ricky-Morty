import { ReactNode } from 'react';

interface FetcherProps {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	bodyInfo?: BodyInit;
}
export interface getRequestProps {
	resource?: 'character' | 'location' | 'episode';
	id?: number;
}

export const baseUrl: string = 'https://rickandmortyapi.com/api';

export const fetcher = async ({ url, method = 'GET', bodyInfo }: FetcherProps) => {
	const payload = {
		method,
		body: bodyInfo && JSON.stringify(bodyInfo),
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const response = await fetch(`${url}`, { ...payload });
	const data = await response.json();

	return data;
};

export const getAll = ({ resource }: getRequestProps) => {
	return fetcher({ url: `${baseUrl}/${resource}` });
};

export const getById = ({ resource, id }: getRequestProps) => {
	return fetcher({ url: `${baseUrl}/${resource}/${id}` });
};
