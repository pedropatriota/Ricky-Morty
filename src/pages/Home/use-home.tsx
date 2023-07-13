import { startTransition, useCallback, useMemo, useState, useContext } from 'react';
import { FilterContext } from '../../context/filter';
import { useLoadMoreAllData } from '../../service/hooks';
import type { TOrder, TSelected } from './contracts';

const useHome = () => {
	const RESOURCE = 'character';

	const {
		filters,
		setFilters,
		select,
		setSelect,
		inputValue,
		setInputValue,
		order,
		setOrder
	} = useContext(FilterContext);

	const { allData, fetchNextPage, hasNextPage, isLoading, isError, error } =
		useLoadMoreAllData({
			resource: RESOURCE,
			filters,
			order
		});

	const genderOptions = useMemo(
		() => [
			{ label: 'Female', value: 'Female' },
			{ label: 'Male', value: 'Male' },
			{ label: 'Unknown', value: 'unknown' }
		],
		[]
	);

	const statusOptions = useMemo(
		() => [
			{ label: 'Alive', value: 'Alive' },
			{ label: 'Dead', value: 'Dead' },
			{ label: 'Unknown', value: 'unknown' }
		],
		[]
	);

	const handleOrder = useCallback(() => {
		setOrder((prevOrder: TOrder): TOrder => {
			if (!prevOrder) return 'Ascending';
			else if (prevOrder === 'Ascending') return 'Descending';
			else return undefined;
		});
	}, [setOrder]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setInputValue(event.target.value);
		startTransition(() => setFilters({ ...filters, name: event.target.value }));
	};

	const handleSelect = useCallback(
		(newValue: TSelected | any, propertyName: string) => {
			setSelect({ ...select, [propertyName]: newValue });
			startTransition(() =>
				setFilters({ ...filters, [propertyName]: newValue?.value as string })
			);
		},
		[filters, select, setFilters, setSelect]
	);

	return {
		allData,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isError,
		resource: RESOURCE,
		error,
		genderOptions,
		statusOptions,
		inputValue,
		handleInputChange,
		handleFilterGender: (value: TSelected | any) => handleSelect(value, 'gender'),
		handleFilterStatus: (value: TSelected | any) => handleSelect(value, 'status'),
		handleSelect,
		select,
		handleOrder,
		order
	};
};

export default useHome;
