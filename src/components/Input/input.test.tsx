import { Input } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/themes';

const setup = () => {
	const handleChangeMocked = jest.fn();
	const utils = render(
		<ThemeProvider theme={dark}>
			<Input
				handleChange={handleChangeMocked}
				placeholder="Type a name..."
				value=""
			/>
		</ThemeProvider>
	);
	const input = screen.getByPlaceholderText(/Type a name/i) as HTMLInputElement;
	return {
		input,
		handleChangeMocked,
		...utils
	};
};

describe('Input', () => {
	it('should render correctly', () => {
		const { input } = setup();

		expect(input).toBeVisible();
		expect(input).toHaveValue('');
		expect(input).toBeInTheDocument();
	});

	it('should be able to type in the input', async () => {
		const { input, handleChangeMocked, rerender } = setup();

		fireEvent.click(input);

		expect(input.value).toBe('');

		fireEvent.change(input, { target: { value: 'Rick' } });

		expect(handleChangeMocked).toHaveBeenCalledTimes(1);

		rerender(
			<ThemeProvider theme={dark}>
				<Input
					handleChange={handleChangeMocked}
					placeholder="Type a name..."
					value="Rick"
				/>
			</ThemeProvider>
		);

		expect(input.value).toBe('Rick');
	});

	it('should match the snapshot', () => {
		const { container } = setup();
		expect(container).toMatchSnapshot();
	});
});
