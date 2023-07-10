/* eslint-disable react/jsx-no-comment-textnodes */
import useHome from './use-home';
import { Filter, List, Template, Order } from '../../components';

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
		handleInputChange,
		handleFilterGender,
		handleFilterStatus,
		genderOptions,
		statusOptions,
		handleOrder,
		order
	} = useHome();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>{error?.toString()}</div>;

	return (
		<Template>
			<Order order={order} handleOrder={handleOrder} />
			<Filter
				handleChange={handleInputChange}
				handleFilter={[handleFilterGender, handleFilterStatus]}
				value={inputValue}
				filter={[select?.gender, select?.status]}
				options={[genderOptions, statusOptions]}
				label={['gender', 'status']}
			/>

			<List
				allData={allData}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
			/>
		</Template>
	);
};

export default Home;
