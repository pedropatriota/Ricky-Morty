import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 0.5rem;

	@media (max-width: 500px) {
		flex-wrap: wrap;
		gap: 1rem;
	}
`;
