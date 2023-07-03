import { startTransition, useCallback, useMemo, useState } from 'react';
import { useLoadMoreAllData } from '../../service/hooks';
import { SingleValue } from 'react-select';

const useHome = () => {
	const RESOURCE = 'character';
	const { allData, fetchNextPage, hasNextPage, isLoading, isError, error } =
		useLoadMoreAllData({
			resource: RESOURCE
		});

	const [filters, setFilters] = useState<{
		name: string;
		region: string;
	}>({ name: '', region: '' });

	const [inputValue, setInputValue] = useState('');

	const [select, setSelect] = useState<SingleValue<{ label: string; value: string }>>({
		label: '',
		value: ''
	});

	const options = useMemo(
		() => [
			{ label: 'Africa', value: 'Africa' },
			{ label: 'Americas', value: 'Americas' },
			{ label: 'Antarctic', value: 'Antarctic' },
			{ label: 'Asia', value: 'Asia' },
			{ label: 'Europe', value: 'Europe' },
			{ label: 'Oceania', value: 'Oceania' }
		],
		[]
	);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		startTransition(() => setFilters({ ...filters, name: event.target.value }));
	};

	const handleSelect = useCallback(
		(newValue: SingleValue<{ label: string; value: string }> | any) => {
			setSelect(newValue);
			startTransition(() =>
				setFilters({ ...filters, region: newValue?.value as string })
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
		options,
		inputValue,
		handleChange,
		handleSelect,
		select
	};
};

export default useHome;
