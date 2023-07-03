import useHome from './use-home';
import InfiniteScroll from 'react-infinite-scroller';
import { Character, Filter } from '../../components';

const Home = () => {
	const {
		allData,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isError,
		error,
		select,
		inputValue,
		handleChange,
		handleSelect,
		options
	} = useHome();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{(error as any)?.toString()}</div>;

	return (
		<>
			<Filter
				filter={select}
				handleChange={handleChange}
				handleFilter={handleSelect}
				value={inputValue}
				options={options}
			/>

			<InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
				{allData.pages.map(({ results }) =>
					results.map(({ id, ...props }: any) => (
						<Character key={id} {...props} />
					))
				)}
			</InfiniteScroll>
		</>
	);
};

export default Home;
