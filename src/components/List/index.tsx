import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import Character from '../Character';
import { Scroller } from './styles';

type keyProps = {
	id: number;
	name: string;
	species: string;
	status: string;
	gender: string;
	image: string;
};

interface ListProps {
	allData: keyProps[];
	fetchNextPage: (
		options?: FetchNextPageOptions | undefined
	) => Promise<InfiniteQueryObserverResult<any, unknown>>;
	hasNextPage?: boolean;
}

const List = ({ allData, fetchNextPage, hasNextPage }: ListProps) => {
	return (
		<Scroller loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
			{allData?.map(({ ...props }) => (
				<Character key={props.id} {...props} />
			))}
		</Scroller>
	);
};

export default List;
