import Dropdown from '../Dropdown';
import type { IFilterProps } from './contracts';
import Input, { IFormProps } from '../Input';
import { Container } from './styles';

const Filter = ({
	value,
	handleChange,
	handleFilter,
	filter,
	options,
	placeholder
}: IFilterProps & IFormProps) => {
	return (
		<Container>
			<Input
				value={value}
				handleChange={handleChange}
				placeholder="type a name..."
			/>
			<Dropdown
				filter={filter[0]}
				options={options[0]}
				handleFilter={handleFilter[0]}
				placeholder={placeholder[0]}
			/>
			<Dropdown
				filter={filter[1]}
				options={options[1]}
				handleFilter={handleFilter[1]}
				placeholder={placeholder[1]}
			/>
		</Container>
	);
};

export default Filter;
