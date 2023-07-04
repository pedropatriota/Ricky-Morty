import Dropdown, { IDropdownProps } from '../Dropdown';
import Input, { IFormProps } from '../Input';
import { Container } from './styles';

const Filter = ({
	value,
	handleChange,
	filter,
	options,
	handleFilter,
	placeholder
}: IDropdownProps & IFormProps) => {
	return (
		<Container>
			<Input
				value={value}
				handleChange={handleChange}
				placeholder="type a name..."
			/>
			<Dropdown
				filter={filter}
				options={options}
				handleFilter={handleFilter}
				placeholder={placeholder}
			/>
			<Dropdown
				filter={filter}
				options={options}
				handleFilter={handleFilter}
				placeholder={placeholder}
			/>
		</Container>
	);
};

export default Filter;
