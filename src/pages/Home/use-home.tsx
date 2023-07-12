import { startTransition, useCallback, useMemo, useState } from 'react';
import { useLoadMoreAllData } from '../../service/hooks';
import type { ISelect, TOrder, TSelected } from './contracts';

const useHome = () => {
	const RESOURCE = 'character';

	const [filters, setFilters] = useState<{
		name: string;
		gender: 'Male' | 'Female' | 'Unknown' | string;
		status: 'Alive' | 'Dead' | 'Unknown' | string;
	}>({ name: '', gender: '', status: '' });

	const [order, setOrder] = useState<TOrder>();

	const [inputValue, setInputValue] = useState('');

	const [select, setSelect] = useState<ISelect>({
		gender: { label: '', value: null },
		status: { label: '', value: null }
	});

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
	}, []);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setInputValue(event.target.value);
		startTransition(() => setFilters({ ...filters, name: event.target.value }));
	};

	const handleSelect = useCallback(
		(newValue: TSelected | any, propertyName: string) => {
			setSelect(newValue);
			startTransition(() =>
				setFilters({ ...filters, [propertyName]: newValue?.value as string })
			);
		},
		[filters]
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
