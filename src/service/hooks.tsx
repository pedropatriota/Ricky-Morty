import { getAll, getById, getRequestProps, baseUrl, fetcher } from './fetcher';
import { queryKeys } from './keys';
import { InfiniteData, useInfiniteQuery, useQuery } from 'react-query';

export const useGetAll = ({ resource }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery([queryKeys.all, resource], () => getAll({ resource }), {
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	return { allData: data, ...params };
};

export const useGetById = ({ resource, id }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery([queryKeys.byId, resource], () => getById({ resource, id }), {
		refetchOnWindowFocus: false,
		refetchOnReconnect: false
	});

	return { DataById: data, ...params };
};

export const useLoadMoreAllData = ({ resource }: getRequestProps) => {
	const { data, ...params } = useInfiniteQuery(
		[queryKeys.all, resource],
		({ pageParam = `${baseUrl}/${resource}` }) => fetcher({ url: pageParam }),
		{
			staleTime: 5000,
			cacheTime: Infinity,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			getNextPageParam: lastPage => {
				return lastPage.info.next || 0;
			}
		}
	);

	return { allData: data as InfiniteData<any>, ...params };
};
