import { ActionMeta, GroupBase, SingleValue } from 'react-select';
import { ReactSelect } from './styles';
import { ReactNode } from 'react';
type Filter = SingleValue<{ label: string; value: string }>;

export interface IDropdownProps {
	options: readonly (Filter | GroupBase<{ label: string; value: string }>)[];
	filter: Filter;
	placeholder: ReactNode;
	handleFilter: (
		newValue: Filter | unknown,
		actionMeta: ActionMeta<Filter | unknown>
	) => void;
}

const Dropdown = ({ options, handleFilter, filter, placeholder }: IDropdownProps) => {
	return (
		<ReactSelect
			classNamePrefix="react-select"
			options={options}
			value={filter}
			onChange={handleFilter}
			autoFocus={false}
			isClearable
			isSearchable
			placeholder={placeholder}
		/>
	);
};

export default Dropdown;
