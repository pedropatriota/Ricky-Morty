import { createContext, useState } from 'react';
import { IFilterProps, TFilter, TOrder, TSelect, IFilterProvider } from './contracts';

export const FilterContext = createContext({
	filters: { name: '', gender: '', status: '' },
	order: undefined,
	select: {
		gender: { label: '', value: null },
		status: { label: '', value: null }
	},
	inputValue: ''
} as IFilterProps);

const FilterProvider = ({ children }: IFilterProvider) => {
	const [filters, setFilters] = useState<TFilter>({ name: '', gender: '', status: '' });

	const [order, setOrder] = useState<TOrder>();

	const [inputValue, setInputValue] = useState('');

	const [select, setSelect] = useState<TSelect>({
		gender: { label: '', value: null },
		status: { label: '', value: null }
	});

	const value = {
		filters,
		setFilters,
		inputValue,
		setInputValue,
		select,
		setSelect,
		order,
		setOrder
	};

	return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
