import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '.';
import type {} from './contracts';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes';

describe('Filter', () => {
	const props = {
		value: 'Rick',
		handleChange: jest.fn(),
		handleFilter: [jest.fn(), jest.fn()],
		filter: [
			{ label: '', value: '' },
			{ label: '', value: '' }
		],
		options: [
			[
				{ label: 'Female', value: 'Female' },
				{ label: 'Male', value: 'Male' },
				{ label: 'Unknown', value: 'unknown' }
			],
			[
				{ label: 'Alive', value: 'Alive' },
				{ label: 'Dead', value: 'Dead' },
				{ label: 'Unknown', value: 'unknown' }
			]
		],
		label: ['gender', 'status']
	};

	it('should render correctly', () => {
		render(
			<ThemeProvider theme={light}>
				<Filter {...props} />
			</ThemeProvider>
		);

		const input = screen.getByRole('textbox');
		const select = screen.getAllByLabelText(/select/i) as HTMLElement[];

		expect(input).toBeInTheDocument();
		expect(select).toHaveLength(2);
	});

	it('should change the input value', () => {
		render(
			<ThemeProvider theme={light}>
				<Filter {...props} />
			</ThemeProvider>
		);

		const input = screen.getByRole('textbox');
		fireEvent.click(input);
		fireEvent.change(input, { target: { value: 'Beth' } });

		expect(props.handleChange).toBeCalledTimes(1);
	});

	it('should select an option', async () => {
		render(
			<ThemeProvider theme={light}>
				<Filter {...props} />
			</ThemeProvider>
		);

		const selector = (await screen.findByLabelText(/gender/)) as Element;

		fireEvent.keyDown(selector, {
			key: 'ArrowDown',
			keyCode: 40,
			code: 40
		});

		const selectedItem = screen.getAllByText('Female');

		fireEvent.click(selectedItem[0]);

		expect(props.handleFilter[0]).toBeCalled();
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={light}>
				<Filter {...props} />
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
