import { Input } from '.';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/themes';

const setup = () => {
	const handleChangeMocked = jest.fn();
	const utils = render(
		<ThemeProvider theme={dark}>
			<Input handleChange={handleChangeMocked} placeholder="Type a name..." />
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
		const { input, handleChangeMocked } = setup();

		// Simulate click event to focus on the input element
		fireEvent.click(input);
		// Assertion to make sure that input value is empty before any type
		expect(input.value).toBe('');
		// Simulate change event with a value
		fireEvent.change(input, { target: { value: 'Rick' } });
		// Assertion to make sure that the onChange event was fired
		expect(handleChangeMocked).toHaveBeenCalledTimes(1);
		// Assertion to make sure that input value is the same that was typed before
		expect(input.value).toBe('Rick');
	});
});

it('should match the snapshot', () => {
	const { container } = setup();
	expect(container).toMatchSnapshot();
});
