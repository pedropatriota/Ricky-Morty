import { ActionMeta, GroupBase, SingleValue } from 'react-select';
import Dropdown from '../Dropdown';
import Input, { IFormProps } from '../Input';
import { Container } from './styles';

type TFilter = SingleValue<{ label: string; value: string }>;

interface IFilterProps {
	filterGender: TFilter;
	filterStatus: TFilter;
	optionsGender: readonly (TFilter | GroupBase<{ label: string; value: string }>)[];
	optionsStatus: readonly (TFilter | GroupBase<{ label: string; value: string }>)[];
	placeholderGender: string;
	placeholderStatus: string;
	handleFilterGender: (
		newValue: TFilter | unknown,
		actionMeta: ActionMeta<TFilter | unknown>
	) => void;
	handleFilterStatus: (
		newValue: TFilter | unknown,
		actionMeta: ActionMeta<TFilter | unknown>
	) => void;
}

const Filter = ({
	value,
	handleChange,
	filterGender,
	filterStatus,
	optionsGender,
	optionsStatus,
	placeholderGender,
	placeholderStatus,
	handleFilterGender,
	handleFilterStatus
}: IFilterProps & IFormProps) => {
	return (
		<Container>
			<Input
				value={value}
				handleChange={handleChange}
				placeholder="type a name..."
			/>
			<Dropdown
				filter={filterGender}
				options={optionsGender}
				handleFilter={handleFilterGender}
				placeholder={placeholderGender}
			/>
			<Dropdown
				filter={filterStatus}
				options={optionsStatus}
				handleFilter={handleFilterStatus}
				placeholder={placeholderStatus}
			/>
		</Container>
	);
};

export default Filter;
