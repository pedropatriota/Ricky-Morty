import { renderWithProviders } from '../../utils';
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import Home from '.';
import { light } from '../../styles/themes';

afterEach(() => cleanup);
describe('Home', () => {
	it('should fetch the API and render correctly', async () => {
		renderWithProviders(<Home />, light);

		const showNames = await screen.findAllByRole('heading');

		expect(showNames.length).toEqual(20);
	});

	it('should filter list when it types in the input', async () => {
		renderWithProviders(<Home />, light);

		const input = await screen.findByRole('textbox');

		fireEvent.change(input, { target: { value: 'Morty' } });

		const showNames = (await screen.findAllByRole('heading', {
			name: /Morty Smith|Alien Morty|Antenna Morty/i
		})) as HTMLElement[];

		expect(showNames).toHaveLength(3);
	});

	it('should filter on select a gender', async () => {
		renderWithProviders(<Home />, light);

		const selector = (await screen.findByLabelText(/gender/)) as Element;

		fireEvent.keyDown(selector, {
			key: 'ArrowDown',
			keyCode: 40,
			code: 40
		});

		const selectedItem = screen.getAllByText('Female');

		fireEvent.click(selectedItem[0]);

		const showNames = await screen.findAllByRole('heading', {
			name: /Summer Smith|Beth Smith|Abadango Cluster Princess|Annie/i
		});

		expect(showNames).toHaveLength(4);
	});

	it('should filter on select a status', async () => {
		renderWithProviders(<Home />, light);

		const selector = (await screen.findByLabelText(/status/)) as Element;

		fireEvent.keyDown(selector, {
			key: 'ArrowDown',
			keyCode: 40,
			code: 40
		});

		const selectedItem = screen.getAllByText('Dead');

		fireEvent.click(selectedItem[0]);

		const showNames = await screen.findAllByRole('heading', {
			name: /Adjudicator Rick|Agency Director|Alan Rails|Albert Einstein/i
		});

		expect(showNames).toHaveLength(4);
	});

	it('should order the list', async () => {
		renderWithProviders(<Home />, light);

		expect(await screen.findByText(/add order/i)).toBeTruthy();

		const button = await screen.findByRole('button', {
			name: /add order/i
		});

		fireEvent.click(button);

		expect(await screen.findByText(/ascending/i)).toBeTruthy();

		const showNames = await screen.findAllByRole('heading', {
			name: /Abadango Cluster Princess|Abradolf Lincler|Adjudicator Rick|Agency Director/i
		});

		expect(showNames).toHaveLength(4);

		fireEvent.click(button);

		expect(await screen.findByText(/descending/i)).toBeTruthy();

		const showNamesDescending = await screen.findAllByRole('heading', {
			name: /Summer Smith|Rick Sanchez|Morty Smith|Jerry Smith/i
		});

		expect(showNamesDescending).toHaveLength(4);
	});
});
