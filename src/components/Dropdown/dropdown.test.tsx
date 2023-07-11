/* eslint-disable testing-library/no-container */
import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes';
import Dropdown from '.';

describe('Dropdown component', () => {
	const options = [
		{ label: 'Female', value: 'Female' },
		{ label: 'Male', value: 'Male' },
		{ label: 'Unknown', value: 'unknown' }
	];

	const props = {
		filter: { label: '', value: '' },
		handleFilter: jest.fn(),
		label: 'gender'
	};
	it('should be able to select an option', async () => {
		render(
			<ThemeProvider theme={light}>
				<Dropdown options={options} {...props} />
			</ThemeProvider>
		);
		expect(screen.queryByText('Female')).not.toBeInTheDocument();

		const selector = screen.getByLabelText(/gender/) as Element;

		fireEvent.keyDown(selector, {
			key: 'ArrowDown',
			keyCode: 40,
			code: 40
		});

		const selectedItem = screen.getByText('Female');

		fireEvent.click(selectedItem);

		expect(props.handleFilter).toBeCalled();
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={light}>
				<Dropdown options={options} {...props} />
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
