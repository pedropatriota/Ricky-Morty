import Input from '.';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/themes';

const handleChangeMocked = jest.fn();
describe('Input', () => {
	it('should render correctly', () => {
		render(
			<ThemeProvider theme={dark}>
				<Input
					value=""
					handleChange={handleChangeMocked}
					placeholder="Type a name..."
				/>
			</ThemeProvider>
		);

		expect(screen.getByRole('textbox')).toBeVisible();
		expect(screen.getByRole('textbox')).toHaveValue('');
		expect(screen.getByPlaceholderText(/Type a name/i)).toBeInTheDocument();
	});

	it('should be able to type in the input', async () => {
		render(
			<ThemeProvider theme={dark}>
				<Input
					value=""
					handleChange={handleChangeMocked}
					placeholder="Type a name..."
				/>
			</ThemeProvider>
		);

		const inputElement = screen.getByPlaceholderText(
			/Type a name/i
		) as HTMLInputElement;

		await waitFor(async () => {
			await userEvent.type(inputElement, 'Rick!');
			expect(handleChangeMocked).toHaveBeenCalled();
		});
	});

	it('should match the snapshot', () => {
		const { container } = render(
			<ThemeProvider theme={dark}>
				<Input
					value=""
					handleChange={handleChangeMocked}
					placeholder="Type a name..."
				/>
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
