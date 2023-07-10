import { ActionMeta, GroupBase, SingleValue } from 'react-select';

type Filter = SingleValue<{ label: string; value: string }>;

export interface IDropdownProps {
	options: readonly (Filter | GroupBase<{ label: string; value: string }>)[];
	filter: Filter;
	placeholder?: string;
	handleFilter: (
		newValue: Filter | unknown,
		actionMeta: ActionMeta<Filter | unknown>
	) => void;
}
