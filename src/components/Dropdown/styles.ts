import styled from 'styled-components';
import Select from 'react-select';

export const ReactSelect = styled(Select)`
	.react-select__control {
		width: min(90vw, 12.5rem);
		background-color: ${props => props.theme.colors.el};
		border-color: ${props => props.theme.colors.border};
		box-shadow: 0 0 0 transparent;
		height: 3.375rem;

		&:hover {
			border-color: ${props => props.theme.colors.border};
		}
	}

	.react-select__single-value {
		color: ${props => props.theme.colors.text};
	}

	.react-select__menu {
		width: 12.5rem;
		background-color: ${props => props.theme.colors.el};
		color: ${props => props.theme.colors.text};
	}

	.react-select__option,
	.react-select__option--is-focused {
		background-color: ${props => props.theme.colors.el};
		color: ${props => props.theme.colors.text};
	}

	.react-select__dropdown-indicator,
	.react-select__indicator-separator {
		display: none;
	}
`;
