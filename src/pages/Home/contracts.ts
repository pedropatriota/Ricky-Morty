import { SingleValue } from 'react-select';

export type TSelected = SingleValue<{ label: string | null; value: string | null }>;

export interface ISelect {
	gender: TSelected;
	status: TSelected;
}

export type TOrder = 'Ascending' | 'Descending' | undefined;
