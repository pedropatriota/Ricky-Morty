export interface IDataCharacterProps {
	name: string;
	image: string;
	species: string;
	gender: 'Male' | 'Female' | 'Unknown';
	status: 'Alive' | 'Dead' | 'Unknown';
}

export type TCharacterKeyProps = keyof IDataCharacterProps;
