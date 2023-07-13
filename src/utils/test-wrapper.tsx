import { QueryClientProvider, QueryClient } from 'react-query';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import FilterProvider from '../context/filter';
import { ReactElement } from 'react';

export interface DefaultTheme {
	title: string;
	colors: {
		bg: string;
		el: string;
		text: string;
		input: string;
		border: string;
	};
}

const generatingQueryClient = () => {
	return new QueryClient();
};

export const renderWithProviders = (
	ui: ReactElement,
	theme?: DefaultTheme,
	client?: QueryClient
): RenderResult => {
	const queryClient = client ?? generatingQueryClient();

	return render(
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<FilterProvider>
					<MemoryRouter>{ui}</MemoryRouter>
				</FilterProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};
