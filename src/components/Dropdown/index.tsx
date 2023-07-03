import { ActionMeta, GroupBase, SingleValue } from 'react-select';
import { ReactSelect } from './styles';
type Filter = SingleValue<{ label: string; value: string }>;

export interface IDropdownProps {
  options: readonly (Filter | GroupBase<{ label: string; value: string }>)[];
  filter: Filter;
  handleFilter: (
    newValue: Filter | unknown,
    actionMeta: ActionMeta<Filter | unknown>
  ) => void;
}

const Dropdown = ({ options, handleFilter, filter }: IDropdownProps) => {
  return (
    <ReactSelect
      classNamePrefix="react-select"
      options={options}
      value={filter}
      onChange={handleFilter}
      autoFocus={false}
      isClearable
      isSearchable
      placeholder={<span>Filter by region...</span>}
    />
  );
};

export default Dropdown;
