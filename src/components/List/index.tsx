import Character from '../Character';
import { Frown } from 'lucide-react';
import { ListProps } from './contracts';
import { Scroller, IconContainer } from './styles';

const List = ({ allData, fetchNextPage, hasNextPage }: ListProps) => {
	return (
		<Scroller
			loadMore={() => fetchNextPage()}
			hasMore={hasNextPage}
			data-testid="scroller"
		>
			{allData?.length > 0 ? (
				allData?.map(({ ...props }) => <Character key={props.id} {...props} />)
			) : (
				<IconContainer>
					<Frown width="10rem" height="10rem" data-testid="icon-emptyList" />
				</IconContainer>
			)}
		</Scroller>
	);
};

export default List;
