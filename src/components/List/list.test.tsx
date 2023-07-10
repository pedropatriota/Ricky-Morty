import List from '.';
import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes';
import { MemoryRouter } from 'react-router-dom';

describe('ListComponent', () => {
	const fetchNextPage = jest.fn();
	const props = [
		{
			id: 4,
			name: 'Beth Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Female',
			image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
		},
		{
			id: 37,
			name: 'Beth Sanchez',
			status: 'Alive',
			species: 'Human',
			gender: 'Female',
			image: 'https://rickandmortyapi.com/api/character/avatar/37.jpeg'
		},
		{
			id: 38,
			name: 'Beth Smith',
			status: 'Alive',
			species: 'Human',
			gender: 'Female',
			image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg'
		}
	];

	it('should render an SVG when data is empty', () => {
		render(<List allData={[]} fetchNextPage={fetchNextPage} hasNextPage={false} />);

		const svg = screen.getByTestId('icon-emptyList');

		expect(svg).toBeInTheDocument();
	});

	it('should render and map the data', async () => {
		const { debug, container } = render(
			<ThemeProvider theme={light}>
				<MemoryRouter>
					<List
						allData={[...props]}
						fetchNextPage={fetchNextPage}
						hasNextPage={false}
					/>
				</MemoryRouter>
			</ThemeProvider>
		);

		const scrolledContainer = screen.getByTestId('scroller');
		const names = screen.getAllByText(/beth/i);

		expect(scrolledContainer).toBeTruthy();
		expect(names).toBeTruthy();
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={light}>
				<MemoryRouter>
					<List
						allData={[...props]}
						fetchNextPage={fetchNextPage}
						hasNextPage={false}
					/>
				</MemoryRouter>
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
