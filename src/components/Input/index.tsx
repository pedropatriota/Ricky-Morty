import { InputHTMLAttributes } from 'react';
import { Input as InputEl } from './styles';

export interface IFormProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const Input = ({ value, handleChange }: IFormProps) => {
	return <InputEl type="text" value={value} onChange={handleChange} />;
};

export default Input;
