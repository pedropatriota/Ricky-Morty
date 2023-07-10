import { ReactSelect } from './styles';
import { IDropdownProps } from './contracts';

const Dropdown = ({ options, handleFilter, filter, placeholder }: IDropdownProps) => {
	return (
		<ReactSelect
			classNamePrefix="react-select"
			options={options}
			value={filter}
			onChange={handleFilter}
			autoFocus={false}
			isClearable
			placeholder={placeholder}
		/>
	);
};

export default Dropdown;
