import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';

type keyProps = {
	id: number;
	name: string;
	species: string;
	status: string;
	gender: string;
	image: string;
};

export interface ListProps {
	allData: keyProps[];
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<any, unknown>>;
	hasNextPage?: boolean;
}
