import styled from 'styled-components';

export const Header = styled.header`
	padding: 0px min(5vw, 5rem);
	background-color: ${({ theme }) => theme.colors.bg};
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	margin-bottom: 4rem;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	img {
		width: 100%;
		height: auto;
		max-width: 10rem;
	}
`;
