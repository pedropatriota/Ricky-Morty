import { QueryCache, QueryClient, MutationCache } from 'react-query';

const queryErrorHandler = (error: unknown): void => {
	const title = error instanceof Error ? error.message : 'error connecting to server';

	console.log(title);
};

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: queryErrorHandler
	}),
	mutationCache: new MutationCache({
		onError: queryErrorHandler
	})
});
