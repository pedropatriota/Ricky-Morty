import styled from 'styled-components';
import { rem } from 'polished';

export const StyledContainer = styled.div`
	padding: ${rem(20)};
	font-family: 'Inter';
	max-width: ${rem(700)};
	margin: auto;
`;

export const StyledLogo = styled.img`
	width: ${rem(80)};
	height: ${rem(80)};
`;

export const StyledTitle = styled.h1`
	color: #0a5beb;
	font-family: 'Poppins';
`;

export const StyledCode = styled.code`
	padding: ${`${rem(5)} ${rem(10)} `};
	background-color: #f6f8fa;
	font-weight: bold;
`;
