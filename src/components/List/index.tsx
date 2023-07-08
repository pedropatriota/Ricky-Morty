import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import Character from '../Character';
import { Frown } from 'lucide-react';
import { Scroller, IconContainer } from './styles';

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
			{allData?.length > 0 ? (
				allData?.map(({ ...props }) => <Character key={props.id} {...props} />)
			) : (
				<IconContainer>
					<Frown width="10rem" height="10rem" />
				</IconContainer>
			)}
		</Scroller>
	);
};

export default List;
