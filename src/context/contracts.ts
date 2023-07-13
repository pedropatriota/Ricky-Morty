import { Dispatch, ReactNode } from 'react';
import { SingleValue } from 'react-select';

export type TSelected = SingleValue<{ label: string | null; value: string | null }>;

export type TSelect = {
	gender: TSelected;
	status: TSelected;
};

export type TFilter = {
	name: string;
	gender: 'Male' | 'Female' | 'Unknown' | string;
	status: 'Alive' | 'Dead' | 'Unknown' | string;
};

export type TOrder = 'Ascending' | 'Descending' | undefined;

export interface IFilterProps {
	filters: TFilter;
	setFilters: Dispatch<React.SetStateAction<TFilter>>;
	order: TOrder;
	setOrder: Dispatch<React.SetStateAction<TOrder>>;
	select: TSelect;
	setSelect: Dispatch<React.SetStateAction<TSelect>>;
	inputValue: string;
	setInputValue: Dispatch<React.SetStateAction<string>>;
}

export interface IFilterProvider {
	children: ReactNode;
}
