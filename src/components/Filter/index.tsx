import Dropdown, { IDropdownProps } from '../Dropdown';
import Input, { IFormProps } from '../Input';
import { Container } from './styles';

const Filter = ({
	value,
	handleChange,
	filter,
	options,
	handleFilter
}: IDropdownProps & IFormProps) => {
	return (
		<Container>
			<Input value={value} handleChange={handleChange} />
			<Dropdown filter={filter} options={options} handleFilter={handleFilter} />
		</Container>
	);
};

export default Filter;
