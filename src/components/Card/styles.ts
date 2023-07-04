import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 18rem;
`;

export const ImagContainer = styled.div<{ image: string }>`
	background-image: url(${props => props.image});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	max-width: 18rem;
	height: 18rem;
	border-radius: 1rem 1rem 0 0;
`;

export const InfoContainer = styled.div`
	padding: 0.5rem;
	background-color: ${props => props.theme.colors.el};
	border: 1px solid ${props => props.theme.colors.el};
	border-radius: 0 0 1rem 1rem;

	h2 {
		margin-bottom: 1rem;
		color: ${props => props.theme.colors.text};
	}
	p {
		margin-bottom: 0.4rem;
		color: ${props => props.theme.colors.text};
	}
`;
