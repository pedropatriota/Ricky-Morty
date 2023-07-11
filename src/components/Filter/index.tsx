import Dropdown from '../Dropdown';
import type { IFilterProps } from './contracts';
import { Input, IFormProps } from '../Input';
import { Container } from './styles';

const Filter = ({
	value,
	handleChange,
	handleFilter,
	filter,
	options,
	label
}: IFilterProps & IFormProps) => {
	return (
		<Container data-testid="filter">
			<Input
				value={value}
				handleChange={handleChange}
				placeholder="type a name..."
			/>
			<Dropdown
				filter={filter[0]}
				options={options[0]}
				handleFilter={handleFilter[0]}
				label={label[0]}
			/>
			<Dropdown
				filter={filter[1]}
				options={options[1]}
				handleFilter={handleFilter[1]}
				label={label[1]}
			/>
		</Container>
	);
};

export default Filter;
