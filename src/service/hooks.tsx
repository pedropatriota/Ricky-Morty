import { getAll, getById, getRequestProps } from './fetcher';
import { queryKeys } from './keys';
import { useQuery } from 'react-query';

export const useGetAll = ({ resource }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery(queryKeys.all, () => getAll({ resource }), {
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	return { allData: data, ...params };
};

export const useGetById = ({ resource, id }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery(queryKeys.byId, () => getById({ resource, id }), {
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	return { DataById: data, ...params };
};
