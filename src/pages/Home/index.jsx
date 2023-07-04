/* eslint-disable react/jsx-no-comment-textnodes */
import useHome from './use-home';
import InfiniteScroll from 'react-infinite-scroller';
import { Character, Filter, List } from '../../components';

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
		genderOptions,
		statusOptions,
	} = useHome();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{(error)?.toString()}</div>;

	return (
		<>
			<Filter
				filter={select}
				handleChange={handleChange}
				handleFilter={(value)=>handleSelect(value,'gender')}
				value={inputValue}
				options={genderOptions}
				placeholder='Select a gender...'
			/>			
			
			<List allData={allData} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage}/>
		</>
	);
};

export default Home;
