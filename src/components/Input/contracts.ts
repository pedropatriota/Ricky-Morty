import { InputHTMLAttributes } from 'react';

export interface IFormProps extends InputHTMLAttributes<HTMLInputElement> {
	value?: string;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
