import { screen, render, within, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../styles/themes';
import Header from '.';

const setup = () => {
	const toggleTheme = jest.fn();
	const utils = render(
		<ThemeProvider theme={light}>
			<Header toggleTheme={toggleTheme} theme={light} />
		</ThemeProvider>
	);
	const header = screen.getByRole('banner');

	return {
		header,
		toggleTheme,
		...utils
	};
};

afterEach(cleanup);

describe('Header', () => {
	const toggleThemeMocked = jest.fn();
	beforeEach(() => {
		toggleThemeMocked.mockClear();
	});

	it('should render Header component', () => {
		const { header } = setup();

		const logo = within(header).getByRole('img', {
			name: /ricky and morty logo/i
		});
		const toggleThemeBtn = within(header).getByRole('button');
		const lightSvg = screen.getByTestId('icon-light');

		expect(logo).toBeInTheDocument();
		expect(toggleThemeBtn).toBeInTheDocument();
		expect(lightSvg).toHaveClass('lucide lucide-moon');
		expect(header).toHaveStyle(`background-color: ${light.colors.bg}`);
	});

	it('should change the theme when toggleThemeBtn is clicked', async () => {
		const { header, toggleTheme } = setup();

		const lightSvg = screen.queryByTestId('icon-light');
		const toggleThemeBtn = within(header).getByRole('button');

		expect(lightSvg).toBeInTheDocument();

		fireEvent.click(toggleThemeBtn);

		expect(toggleTheme).toHaveBeenCalled();
	});

	it('should match the snapshot', () => {
		const { container } = setup();
		expect(container).toMatchSnapshot();
	});
});
