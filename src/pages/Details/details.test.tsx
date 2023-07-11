import { renderWithProviders } from '../../utils';
import { BrowserRouter } from 'react-router-dom';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import Details from '.';
import { light } from '../../styles/themes';

describe('Details', () => {
	beforeAll(() => {
		jest.spyOn(console, 'warn').mockImplementation(jest.fn());
		jest.spyOn(console, 'error').mockImplementation(jest.fn());
	});

	it('should render correctly', async () => {
		renderWithProviders(<Details />, light);

		const name = await screen.findByRole('heading', {
			name: /rick sanchez/i
		});

		const details = await screen.findAllByText(/human|alive|male/i);

		const image = await screen.findByRole('img', {
			name: /rick sanchez/i
		});

		expect(name).toBeInTheDocument();
		expect(details).toHaveLength(3);
		expect(image).toBeInTheDocument();
	});
	it('should back to Home page', async () => {
		renderWithProviders(<Details />, light);

		const icon = await screen.findByRole('button', { name: 'goback-icon' });

		fireEvent.click(icon);

		await waitFor(() => {
			expect(global.window.location?.href).toContain(`/`);
		});
	});
});
