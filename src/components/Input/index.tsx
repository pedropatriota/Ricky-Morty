import { Input as InputEl } from './styles';
import type { IFormProps } from './contracts';

const Input = ({ value, handleChange, ...rest }: IFormProps) => {
	return <InputEl type="text" value={value} onChange={handleChange} {...rest} />;
};

export { Input, IFormProps };
