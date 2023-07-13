import { getById, getRequestProps, baseUrl, fetcher } from './fetcher';
import { queryKeys } from './keys';
import { InfiniteData, useInfiniteQuery, useQuery } from 'react-query';

export const useGetById = ({ resource, id }: getRequestProps) => {
	const fallback = 'loading';
	const { data = fallback, ...params } = useQuery([queryKeys.byId, resource], () =>
		getById({ resource, id })
	);

	return { dataById: data, ...params };
};

const filterPropsFromCharacters = (
	data: InfiniteData<any>,
	filters:
		| {
				name: string;
				gender: 'Male' | 'Female' | 'Unknown' | string;
				status: 'Alive' | 'Dead' | 'Unknown' | string;
		  }
		| undefined,
	order?: 'Ascending' | 'Descending'
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

	if (!order) {
		return newDataFiltered;
	} else if (order === 'Ascending') {
		return newDataFiltered.sort((a, b) =>
			a.name.toLowerCase().localeCompare(b.name.toLowerCase())
		);
	} else
		return newDataFiltered.sort((a, b) =>
			b.name.toLowerCase().localeCompare(a.name.toLowerCase())
		);
};

export const useLoadMoreAllData = ({ resource, filters, order }: getRequestProps) => {
	const { data, ...params } = useInfiniteQuery(
		[queryKeys.all, resource],
		({ pageParam = `${baseUrl}/${resource}` }) => fetcher({ url: pageParam }),
		{
			cacheTime: Infinity,
			refetchOnWindowFocus: false,
			getNextPageParam: lastPage => {
				return lastPage.info.next || undefined;
			},
			select: data => filterPropsFromCharacters(data, filters, order)
		}
	);

	return { allData: data, ...params };
};
