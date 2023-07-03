import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	margin-top: 3.1rem;
	padding: 0 min(5vw, 5rem);
	flex-wrap: nowrap;
	gap: 0.5rem;

	@media (max-width: 500px) {
		flex-wrap: wrap;
		gap: 1rem;
	}
`;
