import { getAll, getById, getRequestProps, baseUrl, fetcher } from './fetcher';
import { queryKeys } from './keys';
import { InfiniteData, useInfiniteQuery, useQuery } from 'react-query';

export const useGetAll = ({ resource }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery(
		[queryKeys.all, resource],
		() => getAll({ resource }),
		{
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		}
	);

	return { allData: data, ...params };
};

export const useGetById = ({ resource, id }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery(
		[queryKeys.byId, resource],
		() => getById({ resource, id }),
		{
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		}
	);

	return { DataById: data, ...params };
};

const filterPropsFromCharacters = (
	data: InfiniteData<any>,
	filters:
		| {
				name: string;
				gender: 'Male' | 'Female' | 'Unknown' | string;
				status: 'Alive' | 'Dead' | 'Unknown' | string;
		  }
		| undefined
): any => {
	const newData = data?.pages.flatMap(({ results }) => {
		return results.map(({ ...props }) => {
			return {
				...props
			};
		});
	});

	const newDataFiltered = newData?.filter(
		(item: any) =>
			item?.name.toLowerCase()?.includes(filters?.name?.toLowerCase() ?? '') &&
			item?.gender?.includes(filters?.gender ?? '') &&
			item?.status?.includes(filters?.status ?? '')
	);

	return newDataFiltered;
};

export const useLoadMoreAllData = ({ resource, filters }: getRequestProps) => {
	const { data, ...params } = useInfiniteQuery(
		[queryKeys.all, resource],
		({ pageParam = `${baseUrl}/${resource}` }) => fetcher({ url: pageParam }),
		{
			cacheTime: Infinity,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			getNextPageParam: lastPage => {
				return lastPage.info.next || undefined;
			},
			select: data => filterPropsFromCharacters(data, filters)
		}
	);

	return { allData: data, ...params };
};
