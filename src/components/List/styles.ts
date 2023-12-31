import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';

export const Scroller = styled(InfiniteScroll)`
	margin-top: 2.5rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 1rem;
`;

export const IconContainer = styled.div`
	display: grid;
	place-content: center;
`;
