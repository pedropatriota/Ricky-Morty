import { useCallback, useState } from 'react';
import Router from './router';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './service/query-client';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/themes';
import { Header } from './components';

const App = () => {
	const [theme, setTheme] = useState(light);

	const toggleTheme = useCallback((): void => {
		setTheme(theme.title === 'light' ? dark : light);
	}, [theme.title]);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Header theme={theme} toggleTheme={toggleTheme} />
				<Router />
				<GlobalStyles />
			</ThemeProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
