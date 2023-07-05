import { startTransition, useCallback, useMemo, useState } from 'react';
import { useLoadMoreAllData } from '../../service/hooks';
import { SingleValue } from 'react-select';

interface ISelect {
	gender: SingleValue<{ label: string | null; value: string | null }>;
	status: SingleValue<{ label: string | null; value: string | null }>;
}

const useHome = () => {
	const RESOURCE = 'character';
	const [filters, setFilters] = useState<{
		name: string;
		gender: 'Male' | 'Female' | 'Unknown' | string;
		status: 'Alive' | 'Dead' | 'Unknown' | string;
	}>({ name: '', gender: '', status: '' });

	const { allData, fetchNextPage, hasNextPage, isLoading, isError, error } =
		useLoadMoreAllData({
			resource: RESOURCE,
			filters
		});

	const [inputValue, setInputValue] = useState('');

	const [select, setSelect] = useState<ISelect>({
		gender: { label: null, value: null },
		status: { label: null, value: null }
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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
		startTransition(() => setFilters({ ...filters, name: event.target.value }));
	};

	const handleSelect = useCallback(
		(
			newValue: SingleValue<{ label: string; value: string }> | any,
			propertyName: string
		) => {
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
		handleChange,
		handleSelect,
		select
	};
};

export default useHome;
