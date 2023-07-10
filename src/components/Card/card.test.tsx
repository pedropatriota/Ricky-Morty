import { screen, render, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes';
import Card from '.';

describe('Card', () => {
	const props = {
		gender: 'Male',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		name: 'Rick Sanchez',
		species: 'Human',
		status: 'Alive'
	};
	it('Should render each Card correctly', async () => {
		render(
			<ThemeProvider theme={light}>
				<Card {...props} />
			</ThemeProvider>
		);

		const card = screen.getByTestId('card');
		const image = screen.getByTestId('card-image');
		const name = screen.getByRole('heading', {
			name: /rick sanchez/i
		});

		const status = within(card).getByText(/alive/i);
		const gender = within(card).getByText(/male/i);
		const specie = within(card).getByText(/human/i);

		expect(card).toBeInTheDocument();
		expect(image).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(status).toBeInTheDocument();
		expect(gender).toBeInTheDocument();
		expect(specie).toBeInTheDocument();
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={light}>
				<Card {...props} />
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
