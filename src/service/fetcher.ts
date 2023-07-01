interface FetcherProps {
	url: string;

	page?: number;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	bodyInfo?: BodyInit;
}
export interface getRequestProps {
	resource?: 'character' | 'location' | 'episode';
	id?: number;
}

const baseUrl: string = 'https://rickandmortyapi.com/api';

const fetcher = async ({ url, page = 1, method = 'GET', bodyInfo }: FetcherProps) => {
	const payload = {
		method,
		body: bodyInfo && JSON.stringify(bodyInfo)
	};

	const response = await fetch(`${url}/?page=${page}`, { ...payload });
	const data = await response.json();

	return data;
};

export const getAll = ({ resource = 'character' }: getRequestProps) => {
	return fetcher({ url: `${baseUrl}/${resource}` });
};

export const getById = ({ resource = 'character', id }: getRequestProps) => {
	return fetcher({ url: `${baseUrl}/${resource}/${id}` });
};
