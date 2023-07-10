import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Character from '.';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { light } from '../../styles/themes';

const setup = () => {
	const props = {
		id: 1,
		gender: 'Male',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		name: 'Rick Sanchez',
		species: 'Human',
		status: 'Alive'
	};

	const utils = render(
		<ThemeProvider theme={light}>
			<MemoryRouter>
				<Character {...props} />
			</MemoryRouter>
		</ThemeProvider>
	);

	const link = screen.getByRole('link', {
		name: /rick sanchez status: alive species: human gender: male/i
	}) as HTMLAnchorElement;

	return {
		link,
		props,
		...utils
	};
};

describe('Character', () => {
	it('should render correctly', () => {
		const { link } = setup();

		expect(link).toBeInTheDocument();
	});
	it('should go to detail page when clicked', async () => {
		const { link, props } = setup();

		fireEvent.click(link);

		await waitFor(() => {
			expect(link.href).toContain(`/${props.id}`);
		});
	});
	it('should match the snapshot', () => {
		const { container } = setup();
		expect(container).toMatchSnapshot();
	});
});
